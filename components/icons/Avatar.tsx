"use client";

import { useState } from "react";

const AVATAR_SRC = "/ilgiz_satkynov_face.jpg";

export function Avatar({ rounded = "rounded-[28%]" }: { rounded?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-400 to-slate-700 font-semibold text-white ${rounded}`}
      >
        IS
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={AVATAR_SRC}
      alt="Ilgiz Satkynov"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${rounded}`}
    />
  );
}
