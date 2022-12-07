"use client";

import { useEffect } from "react";

export function useTitle(params) {
  useEffect(() => {
    document.title = params.slug;
  }, []);
}
