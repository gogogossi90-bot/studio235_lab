/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const PRODUCTS = [
  {
    id: "6370499",
    name: "하이퍼메가 슈퍼반팔 오프화이트",
    price: "38,000 KRW",
    image: "https://image.msscdn.net/thumbnails/images/goods_img/20260424/6370499/6370499_17769930753617_big.jpg?w=1200",
  },
  {
    id: "6370428",
    name: "루즈핏 스퀘어넥 반팔 블랙",
    price: "31,000 KRW",
    image: "https://image.msscdn.net/thumbnails/images/goods_img/20260424/6370428/6370428_17769922399997_big.jpg?w=1200",
  },
  {
    id: "6370379",
    name: "루즈핏 스퀘어넥 반팔 화이트",
    price: "31,000 KRW",
    image: "https://image.msscdn.net/thumbnails/images/goods_img/20260424/6370379/6370379_17769920317601_big.jpg?w=1200",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 sticky top-0 bg-black/80 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="text-xl font-black tracking-tighter italic">STUDIO235</div>
        <a 
          href="https://www.musinsa.com/brand/235laboratory?gf=A" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-300 transition-colors"
        >
          Musinsa Store
        </a>
      </nav>

      {/* Hero Header */}
      <header className="min-h-[60vh] flex flex-col items-center justify-center relative px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block"
        >
          <h1 className="brand-logo-text">
            Studio235
          </h1>
          <div className="mt-4 flex justify-center items-center gap-3 opacity-30">
            <span className="h-[1px] w-8 bg-white"></span>
            <span className="text-[9px] tracking-[0.8em] uppercase font-light">Laboratory Edition</span>
            <span className="h-[1px] w-8 bg-white"></span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent mx-auto mb-4"></div>
          <p className="text-[9px] text-zinc-500 uppercase tracking-[0.5em]">Scroll to Explore</p>
        </motion.div>
      </header>

      {/* Product Grid */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {PRODUCTS.map((product, index) => (
            <motion.a
              key={product.id}
              href={`https://www.musinsa.com/products/${product.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="premium-card group block p-4 rounded-sm"
              id={`product-${product.id}`}
            >
              <div className="aspect-[3/4] overflow-hidden relative mb-6 bg-zinc-900 rounded-sm">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-[11px] font-bold uppercase tracking-tight italic leading-tight">{product.name}</h3>
                <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-wider">{product.price}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-24 text-center border-t border-white/5 bg-zinc-950/20">
        <p className="text-[9px] text-zinc-600 tracking-[0.6em] uppercase opacity-50">Laboratory / Engineering / Studio235</p>
        <p className="text-[8px] text-zinc-800 mt-6 uppercase tracking-widest">© 2026 235Laboratory. All rights reserved.</p>
      </footer>
    </div>
  );
}

