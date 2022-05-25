import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto p-5'>
            <div className="blog my-5">
                <h3 className="mb-3 text-xl text-gray-600 "> How will you improve the performance of a React Application?</h3>
                <p className="text-md text-gray-500 text-justify">
                    Optimizing application performance is key for developers who are mindful of keeping a user experience positive to keep them on an app and engaged.

                    According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

                    In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                    In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:

                    Keeping component state local where necessary
                    Memoizing React components to prevent unnecessary re-renders
                    Code-splitting in React using dynamic import()
                    Windowing or list virtualization in React
                    Lazy loading images in React
                </p>
            </div>
            <div className="blog my-5">
                <h3 className="mb-3 text-xl text-gray-600 ">What are the different ways to manage a state in a React application?</h3>
                <p className="text-md text-gray-500 text-justify">
                    The Four Kinds of React State to Manage
                    When we talk about state in our applications, it important to be clear about what types of state actually matter.
                    There are four main types of state you need to properly manage in your React apps:
                    Local state
                    Global state
                    Server state
                    URL state
                </p>
            </div>
            <div className="blog my-5">
                <h3 className="mb-3 text-xl text-gray-600 ">How does prototypical inheritance work?</h3>
                <p className="text-md text-gray-500 text-justify">
                    When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain

                </p>
            </div>
            <div className="blog my-5">
                <h3 className="mb-3 text-xl text-gray-600 ">hy you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                <p className="text-md text-gray-500 text-justify">
                    juseState() is a so-called Hook.

                    It's baked into React's core API and you use it to manage state in functional components.

                    The way it works is like this:

                    You pass in your initial state ([])
                    It returns an array with exactly 2 elements ([cart, setCart] =  your current state and a state-setting function)
                    You access the state with the first element and set it with the second element (which is a function)
                </p>
            </div>
            <div className="blog my-5">
                <h3 className="mb-3 text-xl text-gray-600 ">ou have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <p className="text-md text-gray-500 text-justify">
                    The search feature is implemented by using the filter() method. The filter() method creates a new array with all elements that pass the test implemented by the provided function. The filter() method does not change the original array. It returns a new array.
                </p>
            </div>
            <div className="blog my-5">
                <h3 className="mb-3 text-xl text-gray-600 ">What is a unit test? Why should write unit tests?</h3>
                <p className="text-md text-gray-500 text-justify">
                    A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.
                </p>
            </div>
        </div>
    );
};

export default Blog;