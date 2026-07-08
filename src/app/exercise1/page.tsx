import RangeSkeleton from '@/components/ui/range/RangeSkeleton';
import Exercise1View from '@/features/exercise1/Exercise1View';
import { getRangeData } from '@/services/rangeService';
import { Suspense } from 'react';
export const revalidate = 0;



export default function Exercise1Page() {
  const rangePromise = getRangeData()
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-8">
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Ejercicio 1: Rango Normal (Continuo)
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Los handles no se pueden cruzar y las etiquetas inferiores son editables haciendo clic.
        </p>
        <Suspense fallback={<RangeSkeleton/>} >
          <Exercise1View ranges={rangePromise} />
        </Suspense>
      </div>
    </main>
  );
}