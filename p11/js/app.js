import { state, setNotisia } from './state.js';
import { render, setStatusNotisia } from './dom.js';
import { pasangPendengar } from './events.js';
import { ambilNotisia } from './api.js';

async function main() {
  pasangPendengar();
  render(state);

  setStatusNotisia('Memuat...');
  try {
    const dataApi = await ambilNotisia();
    if (dataApi && dataApi.length > 0) {
      setNotisia(dataApi);
      render(state);
    } else {
      setStatusNotisia('Belum ada notisia');
    }
  } catch (galat) {
    setStatusNotisia('Gagal memuat data: ' + galat.message);
  }
}

main();