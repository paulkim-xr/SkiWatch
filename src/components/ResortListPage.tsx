import { ResortIndexList } from "@/components/resort/ResortIndexList";

function ResortListPage() {
  return (
    <div className="flex-1 overflow-auto bg-white/80 dark:bg-slate-900/50 backdrop-blur px-4 py-6 md:px-8">
      <ResortIndexList />
    </div>
  );
}

export default ResortListPage;
