"use client";

import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ui/product-card";
import { data } from "@/data";
import { useState } from "react";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="min-h-screen">
      <div className="p-4">
        <div className="space-y-4 pt-3">
          <h3 className="font-bold text-3xl">All Products</h3>
          <Input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search any product..."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data
              .filter((item) =>
                item.title
                  .toLowerCase()
                  .includes(searchText.trim().toLowerCase())
              )
              .map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
