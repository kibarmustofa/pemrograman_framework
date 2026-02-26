const Main = () => {
    return (
        <main className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Daftar Produk Unggulan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border p-4 rounded shadow">Produk A</div>
                <div className="border p-4 rounded shadow">Produk B</div>
                <div className="border p-4 rounded shadow">Produk C</div>
            </div>
        </main>
    );
};

export default Main;