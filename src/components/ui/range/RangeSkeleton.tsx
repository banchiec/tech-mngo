
const RangeSkeleton: React.FC = () => {
  return (
    <div className="py-6 px-4 bg-gray-50 rounded-xl border border-gray-100 animate-pulse">
      <div className="relative h-2 w-full bg-gray-200 rounded-full flex items-center">
        <div className="absolute left-0 w-5 h-5 bg-gray-300 rounded-full" />
        <div className="absolute right-0 w-5 h-5 bg-gray-300 rounded-full" />
      </div>
      
      <div className="flex justify-between items-center mt-6">
        <div className="w-16 h-5 bg-gray-200 rounded" />
        <div className="w-16 h-5 bg-gray-200 rounded" />
      </div>
    </div>
  );
};
export default RangeSkeleton