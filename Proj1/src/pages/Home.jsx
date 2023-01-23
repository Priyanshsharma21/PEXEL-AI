import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Loader, Card, FormField } from '../components/index'


const RenderCard = ({data, title})=>{
  if (data?.length >0) return data.map((post)=>(
    <Card key={post._id} {...post}/>
  ))

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  )
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchedResults] = useState(null)
  const [searchTimeout, setSearchTimeout] = useState(null)
  const { isDark } = useSelector((state)=>state.user);
  useEffect(()=>{
    const fetchPost = async()=>{
      setLoading(true);

      try {
        const response = await fetch('http://localhost:8080/api/v1/post',{
          method : 'GET',
          headers : {
            'Content-Type': 'application/json',
          },
        })

        if(response.ok){
          const result = await response.json();
          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error)
      }finally{
        setLoading(false);
      }
    }
    fetchPost()
  },[])

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );
  };


  return (
    <section className="max-w-7xl mx-auto">
      <div className="mt-5">
        <h1 style={{
         color: isDark ? '#b074fa' : '#2BAE66FF',
        }} className="font-extrabold text-[3rem]">Discover Inspiring Creations</h1>
        <p style={{color : isDark ? 'white' : 'black'}} className="mt-2 text-[#666e75] text-[20px] max-w-[600px]">See the boundless potential of PEXEL AI as our users showcase their creative and visually stunning images</p>
      </div>

      <div className="mt-20">
        <FormField 
          labelName="Search Post"
          type="text"
          name = "text"
          value={searchText}
          handleChange={handleSearchChange}
          placeholder="Search PEXEL AI Images"
        />
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ):(
          <>
            {searchText && (
              <h2 style={{color : isDark ? 'white' : 'black'}} className="font-medium text-[#666e75] text-xl mb-3">
                  Showing results for <span style={{color : isDark ? '#cafeff' : '#5c5c5c'}} className="text-[#222328]">
                    {searchText}
                  </span>
              </h2> 
            )}

            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCard data={searchResults} title="No search results found"/>
              ):(
                <RenderCard data={allPosts} title="No Post Found"/>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Home