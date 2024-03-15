interface OffcanvasProps {
  headerText: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
export default function Offcanvas({
  headerText,
  children,
  isOpen,
  onClose,
}: OffcanvasProps) {
  return (
    <div
      className={`fixed inset-y-0 z-50 w-[408px] bg-shark-900 text-shark-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "left-0 -translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">{headerText}</h2>
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
