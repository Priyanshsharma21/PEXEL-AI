import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Loader,FormField,AICard } from '../components/index'
import axios from 'axios'
import Masonry from 'react-masonry-css';
import {motion} from 'framer-motion'





const RenderCard = ({data, title})=>{
    
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };
      
    return(
        // <div
        // className="mash_no grid-container justify-center"
        // >
        
            // {data?.length > 0 && (
                <>
                <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                >
                    {data.map((post,i)=>(
                        <AICard index={i} key={post.id} data={post} className="w-max "/>
                    ))}
                </Masonry>
                </>
            // )}
        // </div>
    )
  
}


const AISearch = () => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState(null)
    const [aiImages, setAiImages] = useState([])

    const { isDark } = useSelector((state)=>state.user);


    const handleChange = (e)=>{
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const fetchImages = async()=>{
            setLoading(true);

            try {
                const response = await axios.get(`https://lexica.art/api/v1/search?q=${searchTerm}`)
                setAiImages(response.data.images)
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false);
            }
        }
        fetchImages()
    }

   

  return (
    <div className="w-full min-h-[100vh] flex flex-col">
        <div className="searchBox w-full h-auto bg-transparent">
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='aisearch'
                    style={{background : isDark ? '#161616':'white',
                    color : isDark ? 'white':'#161616',
                    }}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
                    placeholder='Search for an Image'
                    value={searchTerm}
                    onChange={handleChange}
                    required
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit(e);
                      }
                    }}
                />
            </form>
        </div>    

        <div className="cards mt-5">
            {aiImages.length > 0 ? (
                    <RenderCard data={aiImages}/>
            ):(
                <Loader />
            )}
        </div>
    </div>
  )
}

export default AISearch