interface DocumentsIdPageProps{
    params: Promise<{ documentId: string}>;
}


const DocumentIdPage = async ({ params }: DocumentsIdPageProps) => {
    const awaitedParams = await params;
    const documentId = awaitedParams.documentId;
    
    return (  
        <div>Document ID:{documentId}</div>
      
    );
}

export default DocumentIdPage;