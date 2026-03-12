import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

const STORAGE_KEY = 'drdrez-cart';

function loadCart() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch { /* ignore */ }
}

function cartReducer(items, action) {
  let next;

  switch (action.type) {
    case 'ADD': {
      const key = `${action.product.id}-${action.size}-${action.color}`;
      const existing = items.find((i) => i.key === key);
      if (existing) {
        next = items.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + (action.quantity || 1) } : i
        );
      } else {
        next = [
          ...items,
          {
            key,
            product: action.product,
            size: action.size,
            color: action.color,
            quantity: action.quantity || 1,
          },
        ];
      }
      break;
    }

    case 'REMOVE':
      next = items.filter((i) => i.key !== action.key);
      break;

    case 'UPDATE_QTY': {
      if (action.quantity <= 0) {
        next = items.filter((i) => i.key !== action.key);
      } else {
        next = items.map((i) =>
          i.key === action.key ? { ...i, quantity: action.quantity } : i
        );
      }
      break;
    }

    case 'CLEAR':
      next = [];
      break;

    default:
      return items;
  }

  saveCart(next);
  return next;
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart);

  // Sync on mount if another tab changed it
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        dispatch({ type: 'CLEAR' });
        const fresh = loadCart();
        fresh.forEach((item) =>
          dispatch({
            type: 'ADD',
            product: item.product,
            size: item.size,
            color: item.color,
            quantity: item.quantity,
          })
        );
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <CartContext.Provider value={items}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

export function useCartTotal() {
  const items = useCart();
  return items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
}

export function useCartCount() {
  const items = useCart();
  return items.reduce((sum, i) => sum + i.quantity, 0);
}
