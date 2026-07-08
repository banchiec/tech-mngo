import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
          Prueba Técnica Frontend Mango
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Custom Range Slider
        </h1>

        <hr className="my-8 border-gray-100" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <Link 
            href="/exercise1"
            className="group flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200 hover:border-black transition-all hover:shadow-md text-left"
          >
            <div>
              <h2 className="text-lg font-bold text-gray-800 group-hover:text-black">
                Ejercicio 1
              </h2>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Permite seleccionar valores mínimos y máximos flotantes con labels editables y validación cruzada.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-gray-700 group-hover:underline flex items-center gap-1">
              Ver ejercicio
            </span>
          </Link>
          <Link 
            href="/exercise2"
            className="group flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200 hover:border-black transition-all hover:shadow-md text-left"
          >
            <div>
              <h2 className="text-lg font-bold text-gray-800 group-hover:text-black">
                Ejercicio 2
              </h2>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Basado en un catálogo de precios fijos asíncronos con efecto magnético y renderizado optimizado.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-gray-700 group-hover:underline flex items-center gap-1">
              Ver ejercicio
            </span>
          </Link>

        </div>

      </div>
    </main>
  );
}