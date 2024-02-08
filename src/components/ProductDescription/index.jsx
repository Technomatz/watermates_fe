import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/reducers/FavoriteReducer';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import { Get } from '../../utils/api';
function ProductDescription() {
  const [localIsFavorite, setLocalIsFavorite] = useState([]);
  const [productDetails, setProductDetails] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const handleClick = () => {
    navigate('/cart');
  };
  const isFavorited = useSelector((state) => state.favorite);

  useEffect(() => {
    if (Array.isArray(isFavorited)) {
      setLocalIsFavorite(
        isFavorited.map((item) => item.id).includes(parseInt(id)),
      );
    }
  }, [isFavorited, id]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await Get(`/products/${id}`, { isAuth: false });
        setProductDetails(response?.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);
  const handleFavoriteClick = () => {
    dispatch(toggleFavorite({ id: parseInt(id) }));
    toast.success(' Item Added To Wishlist!', {
      position: 'bottom-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const removeFromWishlistClassName = localIsFavorite
    ? 'bg-red-500'
    : 'bg-blue-500';

  return (
    <section
      className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800"
      style={{ marginTop: '2rem' }}
    >
      <Box className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <Box className="flex flex-wrap -mx-4">
          <Box className="w-full px-4 md:w-1/2 ">
            <Box className="sticky top-0 z-50 overflow-hidden ">
              <Box className="relative mb-6 lg:mb-10 lg:h-2/4">
                <img
                  src="https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8="
                  alt=""
                  className="object-fill w-full lg:h-full"
                />
              </Box>
              <Box className="flex-wrap hidden md:flex ">
                <Box className="w-1/2 p-2 sm:w-1/4">
                  <a
                    href="#"
                    className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4dnY6MuvSy4PZSJsxN4f9QIDsnwC0jyjvkz4sCutXQ&s"
                      alt=""
                      className="object-fill w-full lg:h-20 sm:h-20"
                    />
                  </a>
                </Box>
                <Box className="w-1/2 p-2 sm:w-1/4">
                  <a
                    href="#"
                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                  >
                    <img
                      src="https://5.imimg.com/data5/ANDROID/Default/2022/1/SV/WH/WM/19104569/product-jpeg.jpg"
                      alt=""
                      className="object-fill w-full lg:h-20 sm:h-20"
                    />
                  </a>
                </Box>
                <Box className="w-1/2 p-2 sm:w-1/4">
                  <a
                    href="#"
                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                  >
                    <img
                      src="https://img.freepik.com/free-photo/water-container_1308-39989.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703203200&semt=ais"
                      alt=""
                      className="object-fill w-full lg:h-20 sm:h-20"
                    />
                  </a>
                </Box>
                <Box className="w-1/2 p-2 sm:w-1/4">
                  <a
                    href="#"
                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                  >
                    <img
                      src="https://4.imimg.com/data4/UL/QJ/MY-2814525/water-jar-500x500.jpg"
                      alt=""
                      className="object-fill w-full lg:h-20 sm:h-20"
                    />
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="w-full px-4 md:w-1/2 ">
            <Box className="lg:pl-20">
              <Box className="mb-8 ">
                <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                  New
                </span>
                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                  {productDetails?.name}
                </h2>
                <Box className="flex items-center mb-6">
                  <ul className="flex mr-2">
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <p className="text-xs dark:text-gray-400 ">
                    (2 customer reviews)
                  </p>
                </Box>
                <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                  {productDetails?.description}
                </p>
                <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                  <span>{productDetails?.price}</span>
                  <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                    $1500.99
                  </span>
                </p>
                <p className="text-green-600 dark:text-green-300 ">
                  7 in stock
                </p>
              </Box>
              <Box className="flex items-center mb-8">
                <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                  Colors:
                </h2>
                <Box className="flex flex-wrap -mx-2 -mb-2">
                  <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                    <Box className="w-6 h-6 bg-cyan-300"></Box>
                  </button>
                  <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <Box className="w-6 h-6 bg-green-300 "></Box>
                  </button>
                  <button className="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <Box className="w-6 h-6 bg-red-200 "></Box>
                  </button>
                </Box>
              </Box>
              <Box className="flex items-center mb-8">
                <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                  Size:
                </h2>
                <Box className="flex flex-wrap -mx-2 -mb-2">
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">
                    XL
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                    S
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                    M
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                    XS
                  </button>
                </Box>
              </Box>
              <Box className="w-32 mb-8 ">
                <label
                  htmlFor=""
                  className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
                >
                  Quantity
                </label>
                <Box className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                  <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                    <span className="m-auto text-2xl font-thin">-</span>
                  </button>
                  <input
                    type="number"
                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                    placeholder="1"
                  />
                  <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </Box>
              </Box>
              <Box className="flex flex-wrap items-center -mx-4 ">
                <Box className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                  <button
                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                    onClick={handleClick}
                  >
                    Buy Now
                  </button>
                </Box>
                <Box className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                  <button
                    className={`flex items-center justify-center w-full p-4 text-white border rounded-md dark:text-gray-200 ${removeFromWishlistClassName}`}
                    onClick={handleFavoriteClick}
                  >
                    {localIsFavorite
                      ? 'Remove From Wishlist'
                      : 'Add in Wishlist'}
                  </button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default ProductDescription;
