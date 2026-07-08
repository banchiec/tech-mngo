import { Suspense } from 'react';
import { getExercise2Data } from '@/services/rangeService';
import RangeSkeleton from '@/components/ui/range/RangeSkeleton';
import { Exercise2View } from '@/features/exercise2/Exercise2View';

export const revalidate = 0;

export default async function Exercise2Page() {
  const dataPromise = getExercise2Data();

  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-8">
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Ejercicio 2: Rango Discreto (Valores Fijos)
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Estructura profesional: Selección fija por catálogo e inputs de solo lectura.
        </p>
        <Suspense fallback={<RangeSkeleton />}>
          <Exercise2View dataPromise={dataPromise} />
        </Suspense>
      </div>
    </main>
  );
}