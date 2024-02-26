// MyComponent.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Phone = () => {
    const router = useRouter();
    const [imageSet, setImageSet] = useState([]);

    useEffect(() => {
        const referrer = document.referrer;
        console.log(referrer);
        console.log('xxxx');
        const urlimg = "https://pointgerph.online/img";
    
        const allowedReferrer = "https://www.google.com/";
        if (referrer === allowedReferrer) {
            setImageSet([
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
            ].map(img => urlimg + img)); // Assuming these images are also from the external URL
        } else {
            setImageSet([
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg',
            ].map(img => urlimg + img));
        }
    }, []);
    

    const handleClick = () => {
        router.push('https://pointgerph.online/');
    };

    return (
        <div>
            <div id="btn" onClick={handleClick}>  
            <div id="img">
                {imageSet.map((src, index) => (
                    <img key={index} src={src} alt={`Product ${index + 1}`} />
                ))}
            </div>
            </div>

        </div>
    );
};

export default Phone;
