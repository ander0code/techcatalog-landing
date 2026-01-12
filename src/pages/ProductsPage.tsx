import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  ChevronDown,
  Grid3X3,
  LayoutList,
  Sparkles
} from 'lucide-react';
import ProductGrid from '../components/products/ProductGrid';
import { 
  products, 
  categories, 
  brands, 
  searchProducts,
  getOnSaleProducts,
  getNewProducts
} from '../data/products';
import { CategoryType, BrandType } from '../types';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  // Get filters from URL
  const selectedCategory = searchParams.get('categoria') as CategoryType | null;
  const selectedBrand = searchParams.get('marca') as BrandType | null;
  const showOnSale = searchParams.get('ofertas') === 'true';
  const showNew = searchParams.get('nuevos') === 'true';

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (searchQuery) {
      result = searchProducts(searchQuery);
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Brand filter
    if (selectedBrand) {
      result = result.filter(p => p.brand === selectedBrand);
    }

    // On sale filter
    if (showOnSale) {
      result = result.filter(p => p.isOnSale);
    }

    // New products filter
    if (showNew) {
      result = result.filter(p => p.isNew);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result = result.filter(p => p.isNew).concat(result.filter(p => !p.isNew));
        break;
      default:
        result = result.filter(p => p.isFeatured).concat(result.filter(p => !p.isFeatured));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedBrand, showOnSale, showNew, sortBy]);

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchQuery('');
  };

  const hasActiveFilters = selectedCategory || selectedBrand || showOnSale || showNew || searchQuery;

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <div className="bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-secondary-900 font-display mb-2">
            {selectedCategory 
              ? categories.find(c => c.id === selectedCategory)?.name 
              : 'Todos los productos'}
          </h1>
          <p className="text-secondary-600">
            {filteredProducts.length} productos encontrados
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400 hover:text-secondary-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white border border-secondary-200 rounded-xl hover:border-primary-500 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filtros
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 bg-white border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 cursor-pointer"
              >
                <option value="featured">Destacados</option>
                <option value="newest">Más nuevos</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
                <option value="rating">Mejor valorados</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400 pointer-events-none" />
            </div>

            {/* View mode */}
            <div className="hidden sm:flex items-center bg-white border border-secondary-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'bg-primary-50 text-primary-600' : 'text-secondary-500 hover:bg-secondary-50'}`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 ${viewMode === 'list' ? 'bg-primary-50 text-primary-600' : 'text-secondary-500 hover:bg-secondary-50'}`}
              >
                <LayoutList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`
            fixed lg:relative inset-0 z-40 lg:z-0
            w-full lg:w-72 lg:flex-shrink-0
            bg-white lg:bg-transparent
            transform lg:transform-none transition-transform duration-300
            ${showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}>
            {/* Mobile header */}
            <div className="lg:hidden flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold text-lg">Filtros</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 lg:p-0 h-full overflow-y-auto">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Quick filters */}
                <div className="p-4 bg-white rounded-2xl border border-secondary-200 shadow-sm">
                  <h4 className="font-semibold text-secondary-900 mb-4">Filtros rápidos</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => updateFilter('ofertas', showOnSale ? null : 'true')}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        showOnSale 
                          ? 'bg-rose-50 text-rose-700 border-rose-200' 
                          : 'bg-secondary-50 hover:bg-secondary-100 text-secondary-700'
                      } border`}
                    >
                      <span className="text-lg">🔥</span>
                      <span className="font-medium">En oferta</span>
                      <span className="ml-auto text-sm">({getOnSaleProducts().length})</span>
                    </button>
                    <button
                      onClick={() => updateFilter('nuevos', showNew ? null : 'true')}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        showNew 
                          ? 'bg-primary-50 text-primary-700 border-primary-200' 
                          : 'bg-secondary-50 hover:bg-secondary-100 text-secondary-700'
                      } border`}
                    >
                      <Sparkles className="w-5 h-5" />
                      <span className="font-medium">Nuevos</span>
                      <span className="ml-auto text-sm">({getNewProducts().length})</span>
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="p-4 bg-white rounded-2xl border border-secondary-200 shadow-sm">
                  <h4 className="font-semibold text-secondary-900 mb-4">Categorías</h4>
                  <div className="space-y-1">
                    <button
                      onClick={() => updateFilter('categoria', null)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                        !selectedCategory 
                          ? 'bg-primary-50 text-primary-700 font-medium' 
                          : 'hover:bg-secondary-50 text-secondary-600'
                      }`}
                    >
                      Todas las categorías
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => updateFilter('categoria', category.id)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                          selectedCategory === category.id 
                            ? 'bg-primary-50 text-primary-700 font-medium' 
                            : 'hover:bg-secondary-50 text-secondary-600'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-secondary-400">{category.productCount}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="p-4 bg-white rounded-2xl border border-secondary-200 shadow-sm">
                  <h4 className="font-semibold text-secondary-900 mb-4">Marcas</h4>
                  <div className="space-y-1 max-h-64 overflow-y-auto">
                    <button
                      onClick={() => updateFilter('marca', null)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                        !selectedBrand 
                          ? 'bg-primary-50 text-primary-700 font-medium' 
                          : 'hover:bg-secondary-50 text-secondary-600'
                      }`}
                    >
                      Todas las marcas
                    </button>
                    {brands.map((brand) => (
                      <button
                        key={brand.id}
                        onClick={() => updateFilter('marca', brand.id)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                          selectedBrand === brand.id 
                            ? 'bg-primary-50 text-primary-700 font-medium' 
                            : 'hover:bg-secondary-50 text-secondary-600'
                        }`}
                      >
                        {brand.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear filters */}
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="w-full py-3 text-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    Limpiar todos los filtros
                  </button>
                )}
              </div>
            </div>

            {/* Mobile backdrop */}
            {showFilters && (
              <div 
                className="lg:hidden fixed inset-0 bg-black/50 -z-10"
                onClick={() => setShowFilters(false)}
              />
            )}
          </aside>

          {/* Products */}
          <div className="flex-1 min-w-0">
            {/* Active filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm">
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <button onClick={() => updateFilter('categoria', null)}>
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                )}
                {selectedBrand && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm">
                    {brands.find(b => b.id === selectedBrand)?.name}
                    <button onClick={() => updateFilter('marca', null)}>
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                )}
                {showOnSale && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-50 text-rose-700 rounded-lg text-sm">
                    En oferta
                    <button onClick={() => updateFilter('ofertas', null)}>
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                )}
                {showNew && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm">
                    Nuevos
                    <button onClick={() => updateFilter('nuevos', null)}>
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 text-secondary-700 rounded-lg text-sm">
                    "{searchQuery}"
                    <button onClick={() => setSearchQuery('')}>
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                )}
              </div>
            )}

            <ProductGrid 
              products={filteredProducts} 
              columns={viewMode === 'list' ? 2 : 3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
