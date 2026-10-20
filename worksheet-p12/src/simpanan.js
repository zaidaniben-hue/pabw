const KUNCI = "pabw-p11"
const VERSI = 1

export function simpan(data) {
  try {
    const payload = {
      versi: VERSI,
      kategoriAktif: data.kategoriAktif
    }
    localStorage.setItem(KUNCI, JSON.stringify(payload))
  } catch (e) {
    console.error("Gagal menyimpan ke localStorage", e)
  }
}

export function muat() {
  try {
    const raw = localStorage.getItem(KUNCI)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    // Jika versi tidak cocok atau simpanan lama rusak, buang dan kembalikan null
    if (parsed.versi !== VERSI) {
      localStorage.removeItem(KUNCI)
      return null
    }
    return parsed
  } catch (e) {
    localStorage.removeItem(KUNCI)
    return null
  }
}

export function aturUlang() {
  localStorage.removeItem(KUNCI)
}