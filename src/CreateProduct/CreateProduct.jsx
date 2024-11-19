import { Select, Label, TextInput, Textarea } from "flowbite-react";
import { api } from "../api/api";
import useHook from "../hook/useHook";

export default function CreateProduct() {
  const {attr:title,onClear:titleClear} = useHook("");
  const {attr:category,onClear:categoryClear} = useHook("");
  const {attr:description,onClear:desClear} = useHook("");
  const {attr:image ,onClear:imageClear}= useHook("");
  const {attr:price,onClear:priceClear} = useHook("");
  const {attr:rating,onClear:ratingClear} = useHook("");
 
const handleSubmit = ()=>{
    const formData =   {
        "id": crypto.randomUUID(),
        "title": title.value,
        "image": image.value,
        "description": description.value,
        "price": price.value,
        "ratting": rating.value,
        "category": category.value
    }
  
    api.post("/products",formData)
    titleClear();
    categoryClear();
    desClear();
    imageClear();
    priceClear();
    ratingClear()
}

  return (
    <>
      <div className="col-span-9 bg-white p-3">
        <h2 className="text-3xl font-bold mb-5">create product</h2>
        <div>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Your title" />
            </div>
            <TextInput
              id="title"
              
              required
              {...title}
            />
          </div>
          <div className="mb-4">
            <div className=" block">
              <Label htmlFor="category" value="Select your category" />
            </div>
            <Select id="category" {...category} required>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
              {...description}
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="image" value="Your image" />
            </div>
            <TextInput id="image" type="text" required {...image}/>
          </div>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Your price" />
            </div>
            <TextInput id="price" type="text" required {...price}/>
          </div>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="rating" value="Your rating" min="0" max="5" />
            </div>
            <TextInput id="rating" type="text" required {...rating}/>
          </div>
          <button className="bg-blue-700 rounded text-white font-semibold py-3 px-3" onClick={handleSubmit}>save post</button>
        </div>
      </div>
    </>
  );
}
