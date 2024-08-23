interface Props {
    message: string;
    children: any;
}
export default function Tooltip({ message, children }: Props) {
    return (
        <div className="group relative flex max-w-max flex-col items-center justify-center">
            <div className="transition-all duration-300 hover:scale-150">
                {children}
            </div>
            <div className="absolute left-1/2 top-2 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100">
                <div className="flex max-w-xs flex-col items-center shadow-lg z-50" style={{ zIndex: 9999999999 }}>
                    <div className="h-2 w-4 bg-gray-800" style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}></div>
                    <div className="rounded bg-gray-800 p-2 text-center text-xs text-white">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    );
}