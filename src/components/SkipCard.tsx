import React from "react";
import { Skip } from "../types/skip";
import { Truck, AlertTriangle, Check } from "lucide-react";

interface SkipCardProps {
  skip: Skip;
  onSelect: (skip: Skip) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, onSelect }) => {
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);

  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(totalPrice);

  return (
    <div className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/30">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {skip.size} Yard Skip
            </h3>
            <p className="text-gray-400 mt-1">
              {skip.hire_period_days} day hire period
            </p>
          </div>
          <span className="px-4 py-2 bg-indigo-900/50 text-indigo-300 rounded-full font-semibold">
            {formattedPrice}
          </span>
        </div>

        <div className="space-y-4">
          <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center">
            <div
              className="relative transition-transform duration-500 group-hover:scale-110"
              style={{
                width: "100%",
                height: `100%`,
              }}
            >
              {/* Skip image based on size */}
              {skip.size <= 20 && (
                <img
                  src="/images/10-yarder-skip.jpg"
                  alt="10 yard skip"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-80"
                />
              )}
              {skip.size === 20 && (
                <img
                  src="/images/20-yarder-skip.jpg"
                  alt="20 yard skip"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-80"
                />
              )}
              {skip.size === 40 && (
                <img
                  src="/images/40-yarder-skip.jpg"
                  alt="40 yard skip"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-80"
                />
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {skip.allowed_on_road && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-900/50 text-green-300 rounded-full text-sm font-medium">
                <Check size={16} />
                Road Placement
              </span>
            )}

            {!skip.allowed_on_road && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-900/50 text-amber-300 rounded-full text-sm font-medium">
                <AlertTriangle size={16} />
                Private Land Only
              </span>
            )}

            {skip.allows_heavy_waste && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium">
                <Truck size={16} />
                Heavy Waste
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              onSelect(skip);
            }}
            className="w-full mt-4 bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold
              transition-all duration-300 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Select This Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
