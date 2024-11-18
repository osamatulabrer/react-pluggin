

function App() {
 
let imgLink = "https://images.pexels.com/photos/2857583/pexels-photo-2857583.jpeg"
  return (
   <div className="grid grid-cols-12 max-w-screen-lg mx-auto bg-slate-100 gap-4 mt-14 p-3">
    <div className="col-span-3 bg-white font-semibold">
      <h2 className="text-3xl font-semibold mb-5 px-2">product category</h2>
      <ul className="sticky top-3">
        <li className="bg-green-200 hover:bg-green-600 hover:text-white py-3 px-2 rounded-sm mx-2 shadow-sm mb-3">
          <a href="#">
            product name
          </a>
        </li>
        <li className="bg-green-200 hover:bg-green-600 hover:text-white py-3 px-2 rounded-sm mx-2 shadow-sm mb-3">
          <a href="#">
            product name
          </a>
        </li>
        <li className="bg-green-200 hover:bg-green-600 hover:text-white py-3 px-2 rounded-sm mx-2 shadow-sm mb-3">
          <a href="#">
            product name
          </a>
        </li>
        <li className="bg-green-200 hover:bg-green-600 hover:text-white py-3 px-2 rounded-sm mx-2 shadow-sm mb-3">
          <a href="#">
            product name
          </a>
        </li>
        <li className="bg-green-200 hover:bg-green-600 hover:text-white py-3 px-2 rounded-sm mx-2 shadow-sm mb-3">
          <a href="#">
            product name
          </a>
        </li>
      </ul>
    </div>
    <div className="col-span-9 bg-white">
      <div className="grid grid-cols-12">
        <div className="col-span-4 rounded-sm shadow-sm overflow-hidden border">
          <img className="h-52 w-full" src={imgLink} alt="asdf" />
          <div className="p-3 space-y-3">
            <p className="text-xl font-semibold">this title</p>
            <p className="text-lg text-slate-500">category name</p>
            <div className="flex justify-between">
              <span>$100</span>
              <span>4.5</span>
            </div>
            <div className="bg-green-600 text-white font-medium py-2 rounded-sm  text-center">read more</div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default App
