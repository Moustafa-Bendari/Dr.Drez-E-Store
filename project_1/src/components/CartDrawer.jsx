import { useEffect } from 'react';
import { useCart, useCartDispatch, useCartTotal, useCartCount } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const items = useCart();
  const dispatch = useCartDispatch();
  const total = useCartTotal();
  const count = useCartCount();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-brown-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[80] h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream-200">
          <div className="flex items-center gap-2">
            <h2 className="font-display text-xl font-bold text-brown-800">Your Cart</h2>
            {count > 0 && (
              <span className="bg-terracotta-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-brown-800/60 hover:text-brown-800 hover:bg-cream-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-cream-200 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-brown-800/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-brown-800 mb-1">
                Your cart is empty
              </h3>
              <p className="text-sm text-brown-800/40 mb-4">
                Explore our collection and add some culture to your cart.
              </p>
              <button
                onClick={onClose}
                className="btn-primary text-sm"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="flex gap-4 bg-cream-50 rounded-xl p-3 group"
                >
                  {/* Thumb */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-cream-200">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-brown-800 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-brown-800/40 mt-0.5">
                      {item.size} · {item.color}
                    </p>
                    <p className="text-sm font-bold text-brown-800 mt-1">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>

                    {/* Qty controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QTY',
                            key: item.key,
                            quantity: item.quantity - 1,
                          })
                        }
                        className="w-7 h-7 rounded-md border border-cream-300 flex items-center justify-center text-xs text-brown-800/60 hover:border-terracotta-400 hover:text-terracotta-500 transition-colors"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium text-brown-800 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QTY',
                            key: item.key,
                            quantity: item.quantity + 1,
                          })
                        }
                        className="w-7 h-7 rounded-md border border-cream-300 flex items-center justify-center text-xs text-brown-800/60 hover:border-terracotta-400 hover:text-terracotta-500 transition-colors"
                      >
                        +
                      </button>

                      <button
                        onClick={() => dispatch({ type: 'REMOVE', key: item.key })}
                        className="ml-auto text-brown-800/30 hover:text-red-500 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-cream-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-brown-800/60">Subtotal</span>
              <span className="text-xl font-bold text-brown-800">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brown-800/40">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              className="w-full btn-primary text-base py-4"
              onClick={() => alert('Stripe checkout coming soon! 🚀')}
            >
              Proceed to Checkout
            </button>
            <button
              onClick={() => dispatch({ type: 'CLEAR' })}
              className="w-full text-center text-sm text-brown-800/40 hover:text-red-500 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
