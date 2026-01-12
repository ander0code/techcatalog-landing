import { Product } from '../../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  featured?: Product | null;
}

export default function ProductGrid({ products, columns = 4, featured = null }: ProductGridProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto mb-6 bg-secondary-100 rounded-full flex items-center justify-center">
          <span className="text-4xl">🔍</span>
        </div>
        <h3 className="text-xl font-semibold text-secondary-900 mb-2">
          No se encontraron productos
        </h3>
        <p className="text-secondary-600 max-w-md mx-auto">
          Intenta ajustar los filtros o buscar con otros términos
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Featured Product */}
      {featured && (
        <div className="animate-fade-in">
          <ProductCard product={featured} variant="featured" />
        </div>
      )}

      {/* Product Grid */}
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
