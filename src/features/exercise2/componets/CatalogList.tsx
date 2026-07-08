interface CatalogListProps {
  catalog: number[];
  currentMin: number;
  currentMax: number;
}

export const CatalogList: React.FC<CatalogListProps> = ({ catalog, currentMin, currentMax }) => {
  return (
   <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
        {catalog.map((price) =>{
          const isSelected = price >= currentMin && price <= currentMax
          const activeStyles = 'bg-black text-white border-black';
          const inactiveStyles = 'bg-white text-gray-400 border-gray-200';
          return(
            <span 
              key={price} 
              className={`text-xs px-1.5 py-0.5 rounded border transition-colors ${
               isSelected 
                  ? activeStyles 
                  : inactiveStyles 
              }`}
            >
              {price}€
            </span>
          )}
        )}
      </div> 
  );
};