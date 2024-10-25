import Header from "@/components/Header";
import BreedSelect from "@/features/breedList/BreedSelect";
import DogImageGallery from "@/features/dogViews/DogImageGallery";
const Home = () => {
  return (
    <div>
      <Header title={"Breed Buddies"} backgroundImage={"https://time-fun.fun/wp-content/uploads/2020/07/twitter-dog-14-1.jpg"} />
      <BreedSelect />
      <DogImageGallery />
    </div>
  )
}

export default Home;