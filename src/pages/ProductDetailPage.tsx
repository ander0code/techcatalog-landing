import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { 
  ArrowLeft, 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw,
  Check,
  Minus,
  Plus,
  ChevronRight
} from 'lucide-react';
import { 
  getProductBySlug, 
  getBrandById, 
  getCategoryById,
  getRelatedProducts,
  calculateDiscount,
  formatPrice 
} from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'features' | 'specs'>('features');

  const product = getProductBySlug(slug || '');
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-4">Producto no encontrado</h1>
          <Link to="/productos" className="btn-primary">
            Ver todos los productos
          </Link>
        </div>
      </div>
    );
  }

  const brand = getBrandById(product.brand);
  const category = getCategoryById(product.category);
  const relatedProducts = getRelatedProducts(product, 4);
  const discount = calculateDiscount(product);
  const allImages = [product.images.main, ...product.images.gallery];

  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.images.main,
    "brand": {
      "@type": "Brand",
      "name": brand?.name
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": product.currency,
      "availability": product.inStock 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewsCount
    }
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-secondary-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-secondary-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-secondary-500 hover:text-primary-600 transition-colors">
                Inicio
              </Link>
              <ChevronRight className="w-4 h-4 text-secondary-400" />
              <Link to="/productos" className="text-secondary-500 hover:text-primary-600 transition-colors">
                Productos
              </Link>
              <ChevronRight className="w-4 h-4 text-secondary-400" />
              {category && (
                <>
                  <Link 
                    to={`/productos?categoria=${category.id}`} 
                    className="text-secondary-500 hover:text-primary-600 transition-colors"
                  >
                    {category.name}
                  </Link>
                  <ChevronRight className="w-4 h-4 text-secondary-400" />
                </>
              )}
              <span className="text-secondary-900 font-medium truncate max-w-[200px]">
                {product.shortName}
              </span>
            </nav>
          </div>
        </div>

        {/* Back button (mobile) */}
        <div className="lg:hidden bg-white border-b border-secondary-200">
          <div className="px-4 py-3">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={allImages[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="badge-new">✨ Nuevo</span>
                  )}
                  {product.isOnSale && discount > 0 && (
                    <span className="badge-sale">-{discount}% OFF</span>
                  )}
                </div>

                {/* Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-secondary-600 hover:text-rose-500 transition-colors shadow-lg">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-secondary-600 hover:text-primary-600 transition-colors shadow-lg">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              {allImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === index 
                          ? 'border-primary-500 ring-2 ring-primary-500/20' 
                          : 'border-secondary-200 hover:border-primary-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - imagen ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Brand */}
              {brand && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                    {brand.name}
                  </span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-2xl lg:text-3xl font-bold text-secondary-900 font-display">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-amber-400 fill-current'
                          : 'text-secondary-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-secondary-600">
                  {product.rating} ({product.reviewsCount} reseñas)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold gradient-text font-display">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-secondary-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="badge-sale">
                    Ahorras {formatPrice(product.originalPrice! - product.price)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-secondary-600 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                {product.inStock ? (
                  <>
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-green-600 font-medium">
                      En stock ({product.stockQuantity} disponibles)
                    </span>
                  </>
                ) : (
                  <span className="text-rose-600 font-medium">Agotado</span>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-secondary-100 rounded-xl p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-secondary-600 hover:text-primary-600 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                    className="w-10 h-10 flex items-center justify-center text-secondary-600 hover:text-primary-600 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <button 
                  disabled={!product.inStock}
                  className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Agregar al carrito
                </button>
              </div>

              {/* Warranty */}
              <div className="p-4 bg-primary-50 rounded-2xl">
                <div className="flex items-center gap-3 text-primary-700">
                  <Shield className="w-6 h-6" />
                  <span className="font-medium">{product.warranty}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Truck, text: 'Envío gratis +$500' },
                  { icon: RotateCcw, text: '30 días para devolver' },
                  { icon: Shield, text: 'Pago seguro' },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-secondary-600">
                    <benefit.icon className="w-5 h-5 text-primary-500" />
                    <span className="text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features & Specs Tabs */}
          <div className="mt-16">
            <div className="flex gap-4 border-b border-secondary-200">
              <button
                onClick={() => setActiveTab('features')}
                className={`px-6 py-4 font-semibold transition-colors relative ${
                  activeTab === 'features' 
                    ? 'text-primary-600' 
                    : 'text-secondary-500 hover:text-secondary-700'
                }`}
              >
                Características
                {activeTab === 'features' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-4 font-semibold transition-colors relative ${
                  activeTab === 'specs' 
                    ? 'text-primary-600' 
                    : 'text-secondary-500 hover:text-secondary-700'
                }`}
              >
                Especificaciones
                {activeTab === 'specs' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600" />
                )}
              </button>
            </div>

            <div className="py-8">
              {activeTab === 'features' ? (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-secondary-900">
                      Características principales
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="text-secondary-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-secondary-900">
                      Descripción
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="max-w-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden border border-secondary-200">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div 
                        key={key}
                        className={`flex ${index % 2 === 0 ? 'bg-secondary-50' : 'bg-white'}`}
                      >
                        <div className="w-1/3 px-6 py-4 font-medium text-secondary-900">
                          {key}
                        </div>
                        <div className="w-2/3 px-6 py-4 text-secondary-600">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-secondary-900 mb-8 font-display">
                Productos relacionados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
