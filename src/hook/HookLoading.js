import React, { useState } from "react";
import Loading from "../common/Loading";

export default function HookLoading() {
  const [loading, setLoading] = useState(false);
  return [
    () => setLoading(false),
    () => setLoading(true),
    loading ? <Loading /> : null,
  ];
}
