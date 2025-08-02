import create from "zustand";

const useStore = create((set) => ({
  cartCount: 0,
  addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
}));

export default useStore;
