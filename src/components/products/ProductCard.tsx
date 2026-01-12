import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Eye, AlertCircle } from 'lucide-react';
import { Product } from '../../types';
import { calculateDiscount, formatPrice, getBrandById } from '../../data/products';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured' | 'compact';
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const discount = calculateDiscount(product);
  const brand = getBrandById(product.brand);

  if (variant === 'featured') {
    return (
      <Link
        to={`/productos/${product.slug}`}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-accent-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="relative lg:w-1/2 aspect-square lg:aspect-auto overflow-hidden bg-gradient-to-br from-secondary-100 to-secondary-50">
            <img
              src={product.images.main}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && (
                <span className="badge-new">
                  Nuevo
                </span>
              )}
              {product.isOnSale && discount > 0 && (
                <span className="badge-sale">
                  -{discount}% OFF
                </span>
              )}
            </div>

            {/* Quick actions */}
            <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-secondary-600 hover:text-primary-600 hover:scale-110 transition-all shadow-lg">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-secondary-600 hover:text-primary-600 hover:scale-110 transition-all shadow-lg">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
            {/* Brand */}
            {brand && (
              <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">
                {brand.name}
              </span>
            )}

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2 font-display">
              {product.shortName}
            </h3>

            {/* Description */}
            <p className="text-secondary-600 mb-4 line-clamp-2">
              {product.shortDescription}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating)
                        ? 'text-amber-400 fill-current'
                        : 'text-secondary-300'
                      }`}
                  />
                ))}
              </div>
              <span className="text-sm text-secondary-500">
                ({product.reviewsCount} reseñas)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold gradient-text font-display">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-secondary-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* CTA */}
            <button className="btn-primary w-full lg:w-auto">
              <ShoppingCart className="w-5 h-5" />
              Agregar al carrito
            </button>
          </div>
        </div>
      </Link>
    );
  }

  // Default card variant
  return (
    <Link
      to={`/productos/${product.slug}`}
      className="group relative card card-hover perspective-1000"
    >
      {/* 3D tilt effect container */}
      <div className="preserve-3d transition-transform duration-500 group-hover:rotate-y-2 group-hover:rotate-x-2">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary-100 to-secondary-50">
          <img
            src={product.images.main}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="badge-new text-xs">
                Nuevo
              </span>
            )}
            {product.isOnSale && discount > 0 && (
              <span className="badge-sale text-xs">
                -{discount}%
              </span>
            )}
          </div>

          {/* Stock status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="px-4 py-2 bg-white/90 rounded-lg font-semibold text-secondary-900">
                Agotado
              </span>
            </div>
          )}

          {/* Quick actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <button
              onClick={(e) => { e.preventDefault(); }}
              className="w-9 h-9 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center text-secondary-600 hover:text-rose-500 hover:scale-110 transition-all shadow-md"
            >
              <Heart className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); }}
              className="w-9 h-9 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center text-secondary-600 hover:text-primary-600 hover:scale-110 transition-all shadow-md"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

          {/* Add to cart quick button */}
          <button
            onClick={(e) => { e.preventDefault(); }}
            className="absolute bottom-3 left-3 right-3 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-primary-700"
          >
            <ShoppingCart className="w-4 h-4" />
            Agregar
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Brand */}
          {brand && (
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
              {brand.name}
            </span>
          )}

          {/* Title */}
          <h3 className="mt-1 font-semibold text-secondary-900 group-hover:text-primary-700 transition-colors line-clamp-2 min-h-[48px]">
            {product.shortName}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.floor(product.rating)
                      ? 'text-amber-400 fill-current'
                      : 'text-secondary-300'
                    }`}
                />
              ))}
            </div>
            <span className="text-xs text-secondary-500">
              ({product.reviewsCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-3">
            <span className="text-lg font-bold text-primary-700">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-secondary-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Stock indicator */}
          {product.inStock && product.stockQuantity <= 5 && (
            <div className="flex items-center gap-1.5 mt-2 text-amber-600">
              <AlertCircle className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">¡Solo {product.stockQuantity} disponibles!</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
