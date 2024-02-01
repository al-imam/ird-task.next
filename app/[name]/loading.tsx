import { rand } from "$util";

export default function Loading() {
  return (
    <div className="grid gap-5">
      <div className="rounded-[0.625rem] bg-background px-4 py-4 sm:px-8">
        <div style={{ width: `${rand(60, 90)}%` }} className="h-6 animate-pulse rounded-md bg-muted" />
      </div>

      <DuaCardLoadingV1 />

      <DuaCardLoadingV2 />
    </div>
  );
}

function DuaCardLoadingV2() {
  return (
    <div className="space-y-9 rounded-[0.625rem] bg-background px-4 py-4 sm:px-8">
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
        <div style={{ width: `${rand(60, 90)}%` }} className="h-4 animate-pulse rounded-md bg-muted" />
      </div>

      <div className="flex flex-col justify-start gap-3">
        <div style={{ width: `${rand(80, 98)}%` }} className="h-4 animate-pulse rounded-md bg-muted" />
        <div style={{ width: `${rand(85, 90)}%` }} className="h-4 animate-pulse rounded-md bg-muted" />
        <div style={{ width: `${rand(50, 95)}%` }} className="h-4 animate-pulse rounded-md bg-muted" />
      </div>

      <div className="flex flex-col items-end gap-3">
        <div style={{ width: `${rand(80, 92)}%` }} className="h-5 animate-pulse rounded-md bg-muted" />
        <div style={{ width: `${rand(65, 85)}%` }} className="h-5 animate-pulse rounded-md bg-muted" />
      </div>

      <div className="flex flex-col justify-start gap-3">
        <div style={{ width: `${rand(20, 30)}%` }} className="h-4 animate-pulse rounded-md bg-muted" />
        <div style={{ width: `${rand(20, 60)}%` }} className="h-4 animate-pulse rounded-md bg-muted" />
      </div>

      <div className="flex gap-4 *:flex-1">
        <div>
          <div style={{ width: `30%` }} className="h-5 animate-pulse rounded-md bg-muted" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
          <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
          <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
          <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
          <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
          <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
        </div>
      </div>
    </div>
  );
}

function DuaCardLoadingV1() {
  return (
    <div className="space-y-9 rounded-[0.625rem] bg-background px-4 py-4 sm:px-8">
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
        <div style={{ width: `${rand(60, 90)}%` }} className="h-4 animate-pulse rounded-md bg-muted" />
      </div>

      <div className="flex flex-col justify-start gap-3">
        <div style={{ width: `${rand(80, 98)}%` }} className="h-4 animate-pulse rounded-md bg-muted" />
        <div style={{ width: `${rand(85, 90)}%` }} className="h-4 animate-pulse rounded-md bg-muted" />
        <div style={{ width: `${rand(50, 95)}%` }} className="h-4 animate-pulse rounded-md bg-muted" />
      </div>

      <div className="flex flex-col items-end gap-3">
        <div style={{ width: `${rand(80, 92)}%` }} className="h-5 animate-pulse rounded-md bg-muted" />
        <div style={{ width: `${rand(65, 85)}%` }} className="h-5 animate-pulse rounded-md bg-muted" />
      </div>

      <div className="flex gap-4 *:flex-1">
        <div>
          <div style={{ width: `${rand(30, 40)}%` }} className="h-5 animate-pulse rounded-md bg-muted" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
          <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
          <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
          <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
          <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
          <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
        </div>
      </div>
    </div>
  );
}
