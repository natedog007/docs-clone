interface DocumentsLayoutProps{
    children: React.ReactNode;
}

function DocumentsLayout({children}: DocumentsLayoutProps){
    return (  
        <div className="flex flex-col gap-y-4">
            <nav className="w-full bg-blue-500">NavBar</nav>
            {children}
        </div>
    );
}
 
export default DocumentsLayout