import React from 'react';

interface Props {
    id: string;
    width?: string;
    height?: string;
}

export const WeatherSvgSelector = ({ id, width, height }: Props) => {
  switch (id) {
    case '01d':
      return (
        <svg 
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        ><title/><g id="Sun"><circle cx="32" cy="32" r="15" fill="#ffd36b"/><path d="M32,13a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0v9A1,1,0,0,1,32,13Z" fill="#ffe78f"/><path d="M17.8574,18.8579a.9964.9964,0,0,1-.707-.293l-4.2422-4.2426a1,1,0,1,1,1.4141-1.4141l4.2422,4.2427a1,1,0,0,1-.7071,1.707Z" fill="#ffe78f"/><path d="M12,33H3a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Z" fill="#ffe78f"/><path d="M13.6152,51.3848a1,1,0,0,1-.707-1.7071L17.15,45.4351a1,1,0,1,1,1.4141,1.414l-4.2422,4.2427A.9969.9969,0,0,1,13.6152,51.3848Z" fill="#ffe78f"/><path d="M32,62a1,1,0,0,1-1-1V52a1,1,0,0,1,2,0v9A1,1,0,0,1,32,62Z" fill="#ffe78f"/><path d="M50.3848,51.3848a.9969.9969,0,0,1-.7071-.293l-4.2422-4.2427a1,1,0,1,1,1.4141-1.414l4.2422,4.2426a1,1,0,0,1-.707,1.7071Z" fill="#ffe78f"/><path d="M61,33H52a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Z" fill="#ffe78f"/><path d="M46.1426,18.8579a1,1,0,0,1-.7071-1.707l4.2422-4.2427a1,1,0,0,1,1.4141,1.4141L46.85,18.5649A.9964.9964,0,0,1,46.1426,18.8579Z" fill="#ffe78f"/></g></svg>
       
      );
    case '02d':
     return (
        <svg 
        width= {width ? width : "100%"}
        height={height ? height : "100%"}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        ><title/><g id="Sunny"><path d="M38.7744,19.5518a12.1579,12.1579,0,0,0-11.3413,7.6733,1,1,0,0,0,.7715,1.3594,12.0286,12.0286,0,0,1,9.0879,6.9443,1,1,0,0,0,1.1069.5679,9.3251,9.3251,0,0,1,8.7793,2.8462,1.0007,1.0007,0,0,0,.7407.3281c.02,0,.0406-.0005.0611-.002a1.0007,1.0007,0,0,0,.7563-.4218,12.2235,12.2235,0,0,0-9.9624-19.2954Z" fill="#ffd36b"/><path d="M38.7744,16.75a1,1,0,0,1-1-1V8.542a1,1,0,0,1,2,0V15.75A1,1,0,0,1,38.7744,16.75Z" fill="#ffe78f"/><path d="M27.4478,21.4414a.9965.9965,0,0,1-.7071-.293l-3.3979-3.3979a1,1,0,1,1,1.414-1.4141l3.398,3.398a1,1,0,0,1-.707,1.707Z" fill="#ffe78f"/><path d="M62,32.7676H54.792a1,1,0,0,1,0-2H62a1,1,0,0,1,0,2Z" fill="#ffe78f"/><path d="M50.1006,21.4414a1,1,0,0,1-.707-1.707l3.3979-3.398a1,1,0,0,1,1.4141,1.4141l-3.398,3.3979A.9964.9964,0,0,1,50.1006,21.4414Z" fill="#ffe78f"/><path d="M51.5659,44.4351A11.2818,11.2818,0,0,0,38.7754,34.0073a14.071,14.071,0,0,0-25.7339,1.7656A7.5344,7.5344,0,0,0,5.72,44.1313,8.5348,8.5348,0,0,0,1,51.7227a8.4075,8.4075,0,0,0,1.1431,4.24.9991.9991,0,0,0,.8632.4956H55.0127a1.0008,1.0008,0,0,0,.8169-.4228,7.4345,7.4345,0,0,0,1.3638-4.3125A7.5632,7.5632,0,0,0,51.5659,44.4351Z" fill="#9cd5f2"/></g></svg>
    
        );
    case '03d':
      return (
       <svg 
        width= {width ? width : "100%"}
        height={height ? height : "100%"}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
       ><title/><g id="Cloud">
        <path d="M55.9771,35.2549A12.015,12.015,0,0,0,44,24a12.1858,12.1858,0,0,0-1.6792.1162A14.9915,14.9915,0,0,0,14.8623,26.001,8.01,8.01,0,0,0,7,34a7.91,7.91,0,0,0,.0537.916A9.0644,9.0644,0,0,0,2,43a8.8727,8.8727,0,0,0,1.2188,4.5078A.9991.9991,0,0,0,4.08,48H59.74a.9991.9991,0,0,0,.8194-.4268A7.942,7.942,0,0,0,62,43,8.0294,8.0294,0,0,0,55.9771,35.2549Z" fill="#9cd5f2"/>
       <path d="M33.7368,47.61a10.2752,10.2752,0,0,0-.1089-1.0406,9.7478,9.7478,0,0,0-19.2563.0025,10.3531,10.3531,0,0,0-.1084,1.0381A7.9712,7.9712,0,0,0,9,55.105a1,1,0,0,0,1,1H38a1,1,0,0,0,1-1A7.9712,7.9712,0,0,0,33.7368,47.61Z" fill="#b2ebf2"/></g></svg>
      
    );
    case '04d':
    return (
        <svg 
        width= {width ? width : "100%"}
        height={height ? height : "100%"}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><title/><g id="Cloudy"><path d="M58.7051,20.438q.0145-.2022.0146-.4028a5.5933,5.5933,0,0,0-5.2456-5.5806A10.17,10.17,0,0,0,35.042,13.1875a8.0309,8.0309,0,0,0-.9019-.0527,8.1458,8.1458,0,0,0-6.312,2.9643,1,1,0,0,0,.8472,1.6328c.1055-.0078.2183-.0073.3247-.0068a13.0334,13.0334,0,0,1,11.8394,7.6431,1,1,0,0,0,1.1147.5659,10.0178,10.0178,0,0,1,9.626,3.271.9994.9994,0,0,0,.76.35h7.95a1,1,0,0,0,.8633-.4951A6.2019,6.2019,0,0,0,62,25.9351,6.2788,6.2788,0,0,0,58.7051,20.438Z" fill="#7cc9f2"/><path d="M55.9771,34.98A12.006,12.006,0,0,0,44,23.7251a12.1858,12.1858,0,0,0-1.6792.1162A15.0383,15.0383,0,0,0,29,15.7251c-.1543,0-.3208.001-.4272.01a14.9263,14.9263,0,0,0-13.7115,9.9907A8.01,8.01,0,0,0,7,33.7251a7.91,7.91,0,0,0,.0537.916A9.0644,9.0644,0,0,0,2,42.7251a8.8729,8.8729,0,0,0,1.2188,4.5078.9991.9991,0,0,0,.8613.4922H15.36a1,1,0,0,0,.9878-.8442,7.7477,7.7477,0,0,1,15.3046,0,1,1,0,0,0,.9878.8442h27.1a.9991.9991,0,0,0,.8194-.4268A7.942,7.942,0,0,0,62,42.7251,8.03,8.03,0,0,0,55.9771,34.98Z" fill="#9cd5f2"/><path d="M33.7368,47.61a10.2752,10.2752,0,0,0-.1089-1.0406,9.7478,9.7478,0,0,0-19.2563.0025,10.3531,10.3531,0,0,0-.1084,1.0381A7.9712,7.9712,0,0,0,9,55.105a1,1,0,0,0,1,1H38a1,1,0,0,0,1-1A7.9712,7.9712,0,0,0,33.7368,47.61Z" fill="#b2ebf2"/></g></svg>
    
    );
    case '09d':
        return (
            <svg 
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><title/><g id="Rain"><path d="M55.9775,28.2549A12.015,12.015,0,0,0,44,17a12.1931,12.1931,0,0,0-1.68.1162,14.9911,14.9911,0,0,0-27.458,1.8848A8.01,8.01,0,0,0,7,27a7.8027,7.8027,0,0,0,.0537.9165A9.0632,9.0632,0,0,0,2,36a8.8759,8.8759,0,0,0,1.2188,4.5083A1,1,0,0,0,4.08,41H59.74a.9993.9993,0,0,0,.8194-.4268A7.942,7.942,0,0,0,62,36,8.03,8.03,0,0,0,55.9775,28.2549Z" fill="#7cc9f2"/><path d="M9.6016,44.5684c-.3448.37-3.3682,3.6894-3.3682,6.3315a4.1,4.1,0,1,0,8.2,0c0-2.6421-3.0244-5.9619-3.3691-6.332A1.0311,1.0311,0,0,0,9.6016,44.5684Z" fill="#b2ebf2"/><path d="M24.2686,44.5684C23.9238,44.938,20.9,48.2578,20.9,50.9a4.1,4.1,0,1,0,8.1992,0c0-2.6421-3.0234-5.9619-3.3682-6.3315A1.03,1.03,0,0,0,24.2686,44.5684Z" fill="#b2ebf2"/><path d="M38.2686,44.5684C37.9238,44.938,34.9,48.2578,34.9,50.9a4.1,4.1,0,1,0,8.1992,0c0-2.6421-3.0234-5.9619-3.3682-6.3315A1.03,1.03,0,0,0,38.2686,44.5684Z" fill="#b2ebf2"/><path d="M54.3984,44.5684a1,1,0,0,0-1.4629,0c-.3447.37-3.3691,3.69-3.3691,6.332a4.1,4.1,0,1,0,8.2,0C57.7666,48.2578,54.7432,44.938,54.3984,44.5684Z" fill="#b2ebf2"/></g></svg>
        
        );
    case '10d':
        return (
            <svg 
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><title/><g data-name="Sunny Rain" id="Sunny_Rain"><path d="M38.5488,13.6094a11.7867,11.7867,0,0,0-10.9951,7.4385,1,1,0,0,0,.7725,1.3593,11.5887,11.5887,0,0,1,8.7588,6.6944.9919.9919,0,0,0,1.1074.5673A8.9532,8.9532,0,0,1,46.6475,32.41a1,1,0,0,0,.7412.3281c.02,0,.041-.001.06-.002a1,1,0,0,0,.7569-.4218,11.85,11.85,0,0,0-9.6573-18.7051Z" fill="#ffd36b"/><path d="M38.5488,10.9678a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V9.9678A.9994.9994,0,0,1,38.5488,10.9678Z" fill="#ffe78f"/><path d="M27.6,15.5029a.9967.9967,0,0,1-.707-.2929l-3.2842-3.2852a1,1,0,1,1,1.4141-1.4141l3.2841,3.2852a1,1,0,0,1-.707,1.707Z" fill="#ffe78f"/><path d="M61,26.4512H54.0322a1,1,0,0,1,0-2H61a1,1,0,0,1,0,2Z" fill="#ffe78f"/><path d="M49.4971,15.5029a1,1,0,0,1-.7071-1.707l3.2852-3.2852a1,1,0,1,1,1.4141,1.4141L50.2041,15.21A.9967.9967,0,0,1,49.4971,15.5029Z" fill="#ffe78f"/><path d="M50.9453,37.67A10.9391,10.9391,0,0,0,38.5684,27.58a13.574,13.574,0,0,0-9.93-7.1475A13.7517,13.7517,0,0,0,13.6494,29.291a7.3315,7.3315,0,0,0-7.1308,7.3213,7.1273,7.1273,0,0,0,.0419.7715A8.2843,8.2843,0,0,0,2,44.7412a8.17,8.17,0,0,0,1.1094,4.1152.9978.9978,0,0,0,.8633.4961H54.2461a1.0023,1.0023,0,0,0,.8174-.4228,7.2314,7.2314,0,0,0,1.3232-4.1885A7.3477,7.3477,0,0,0,50.9453,37.67Z" fill="#b2ebf2"/><path d="M9.3379,52.3184c-.3174.3408-3.1025,3.3984-3.1025,5.8476a3.8345,3.8345,0,0,0,7.6689,0c0-2.4492-2.7861-5.5078-3.1035-5.8476A1.03,1.03,0,0,0,9.3379,52.3184Z" fill="#9cd5f2"/><path d="M28.4619,52.3184c-.3174.3408-3.1025,3.3984-3.1025,5.8476a3.8345,3.8345,0,0,0,7.6689,0c0-2.4492-2.7861-5.5078-3.1035-5.8476A1.03,1.03,0,0,0,28.4619,52.3184Z" fill="#9cd5f2"/><path d="M49.0488,52.3184a1.03,1.03,0,0,0-1.4629,0c-.3173.3408-3.1025,3.3984-3.1025,5.8476a3.834,3.834,0,0,0,7.668,0C52.1514,55.7168,49.3662,52.6592,49.0488,52.3184Z" fill="#9cd5f2"/></g></svg>
            
        );
    case '11d':
        return (
            <svg 
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><title/><g id="Storm"><path d="M55.9771,25.2549A12.015,12.015,0,0,0,44,14a12.1858,12.1858,0,0,0-1.6792.1162A14.9915,14.9915,0,0,0,14.8623,16.001,8.01,8.01,0,0,0,7,24a7.91,7.91,0,0,0,.0537.916A9.0644,9.0644,0,0,0,2,33a8.8727,8.8727,0,0,0,1.2188,4.5078A.9991.9991,0,0,0,4.08,38H59.74a.9991.9991,0,0,0,.8194-.4268A7.942,7.942,0,0,0,62,33,8.0294,8.0294,0,0,0,55.9771,25.2549Z" fill="#c3aed6"/><path d="M17,45H13.2808l.6894-2.7573A1,1,0,0,0,13,41H8a1,1,0,0,0-.9614.7251l-2,7A1,1,0,0,0,6,50H7.7192L6.03,56.7573a1,1,0,0,0,1.71.9156l10-11A1,1,0,0,0,17,45Z" fill="#ff9a76"/><path d="M38,45H34.2808l.6894-2.7573A1,1,0,0,0,34,41H29a1,1,0,0,0-.9614.7251l-2,7A1,1,0,0,0,27,50h1.7192L27.03,56.7573a1,1,0,0,0,1.71.9156l10-11A1,1,0,0,0,38,45Z" fill="#ff9a76"/><path d="M58.9146,45.5952A1,1,0,0,0,58,45H54.2808l.6894-2.7573A1,1,0,0,0,54,41H49a1,1,0,0,0-.9614.7251l-2,7A1,1,0,0,0,47,50h1.7192L47.03,56.7573a1,1,0,0,0,1.71.9156l10-11A1,1,0,0,0,58.9146,45.5952Z" fill="#ff9a76"/></g></svg>
        
        );
    case '13d':
        return (
            <svg 
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><title/><g id="Snowy"><path d="M55.9771,24.2549A12.0165,12.0165,0,0,0,44,13a12.175,12.175,0,0,0-1.6792.1162,14.9911,14.9911,0,0,0-27.458,1.8848A8.0094,8.0094,0,0,0,7,23a7.9152,7.9152,0,0,0,.0537.916A9.0644,9.0644,0,0,0,2,32a8.8713,8.8713,0,0,0,1.2188,4.5078A1,1,0,0,0,4.08,37H59.74a.9991.9991,0,0,0,.8194-.4268A7.9408,7.9408,0,0,0,62,32,8.0286,8.0286,0,0,0,55.9771,24.2549Z" fill="#b2ebf2"/><circle cx="12" cy="44" r="4" fill="#9cd5f2"/><circle cx="20" cy="55" r="4" fill="#9cd5f2"/><circle cx="41" cy="55" r="4" fill="#9cd5f2"/><circle cx="52" cy="44" r="4" fill="#9cd5f2"/><circle cx="32" cy="44" r="4" fill="#9cd5f2"/></g></svg>
        
        );
    case '50d':
        return (
            <svg 
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M2.62,21.05c0-0.24,0.08-0.45,0.25-0.61c0.17-0.16,0.38-0.24,0.63-0.24h18.67c0.25,0,0.45,0.08,0.61,0.24
                c0.16,0.16,0.24,0.36,0.24,0.61c0,0.23-0.08,0.43-0.25,0.58c-0.17,0.16-0.37,0.23-0.6,0.23H3.5c-0.25,0-0.46-0.08-0.63-0.23
                C2.7,21.47,2.62,21.28,2.62,21.05z M5.24,17.91c0-0.24,0.09-0.44,0.26-0.6c0.15-0.15,0.35-0.23,0.59-0.23h18.67
                c0.23,0,0.42,0.08,0.58,0.24c0.16,0.16,0.23,0.35,0.23,0.59c0,0.24-0.08,0.44-0.23,0.6c-0.16,0.17-0.35,0.25-0.58,0.25H6.09
                c-0.24,0-0.44-0.08-0.6-0.25C5.32,18.34,5.24,18.14,5.24,17.91z M5.37,15.52c0,0.09,0.05,0.13,0.15,0.13h1.43
                c0.06,0,0.13-0.05,0.2-0.16c0.24-0.52,0.59-0.94,1.06-1.27c0.47-0.33,0.99-0.52,1.55-0.56l0.55-0.07c0.11,0,0.17-0.06,0.17-0.18
                l0.07-0.5c0.11-1.08,0.56-1.98,1.37-2.7c0.81-0.72,1.76-1.08,2.85-1.08c1.08,0,2.02,0.36,2.83,1.07c0.8,0.71,1.26,1.61,1.37,2.68
                l0.08,0.57c0,0.11,0.07,0.17,0.2,0.17h1.59c0.64,0,1.23,0.17,1.76,0.52s0.92,0.8,1.18,1.37c0.07,0.11,0.14,0.16,0.21,0.16h1.43
                c0.12,0,0.17-0.07,0.14-0.23c-0.29-1.02-0.88-1.86-1.74-2.51c-0.87-0.65-1.86-0.97-2.97-0.97h-0.32c-0.33-1.33-1.03-2.42-2.1-3.27
                s-2.28-1.27-3.65-1.27c-1.4,0-2.64,0.44-3.73,1.32s-1.78,2-2.09,3.36c-0.85,0.2-1.6,0.6-2.24,1.21c-0.64,0.61-1.09,1.33-1.34,2.18
                v-0.04C5.37,15.45,5.37,15.48,5.37,15.52z M6.98,24.11c0-0.24,0.09-0.43,0.26-0.59c0.15-0.15,0.35-0.23,0.6-0.23h18.68
                c0.24,0,0.44,0.08,0.6,0.23c0.17,0.16,0.25,0.35,0.25,0.58c0,0.24-0.08,0.44-0.25,0.61c-0.17,0.17-0.37,0.25-0.6,0.25H7.84
                c-0.23,0-0.43-0.09-0.6-0.26C7.07,24.55,6.98,24.34,6.98,24.11z " fill="#7cc9f2"/>
            </svg>
        );
    case '01n':
        return (
            <svg  
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
       <g>
           <path fill="#c3aed6" d="M16,29.5C8.556,29.5,2.5,23.444,2.5,16C2.5,8.556,8.556,2.5,16,2.5c7.444,0,13.5,6.056,13.5,13.5
               C29.5,23.444,23.444,29.5,16,29.5z"/>
       </g>
       <g>
           <path fill="#9883ba" d="M12.5,13C10.57,13,9,11.43,9,9.5S10.57,6,12.5,6S16,7.57,16,9.5S14.43,13,12.5,13z"/>
       </g>
       <g>
           <circle fill="#9883ba" cx="6" cy="14" r="1.5"/>
       </g>
       <g>
           <circle fill="#9883ba" cx="11" cy="18" r="2.5"/>
       </g>
       </svg>
        );
    case '02n':
        return (
            <svg  
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
        <title/><g id="Moon">
        <path d="M61.4482,20.666a1.0034,1.0034,0,0,0-1.1616.1924A11.0932,11.0932,0,0,1,52.31,24.2,11.208,11.208,0,0,1,45.8554,3.8281a1,1,0,0,0-.416-1.8056A2.1852,2.1852,0,0,0,45.09,2,17.1089,17.1089,0,0,0,28,19.09c0,.4356.021.87.0527,1.294a1,1,0,0,0,.8555.916A12.01,12.01,0,0,1,38.17,28.2637a.9973.9973,0,0,0,1.1142.5644A9.2619,9.2619,0,0,1,49.7871,34.53a.9992.9992,0,0,0,.9326.64.9861.9861,0,0,0,.3476-.0625A17.0683,17.0683,0,0,0,61.9882,21.7119.9989.9989,0,0,0,61.4482,20.666Z" fill="#9883ba"/>
        <path d="M55.9771,35.2549A12.015,12.015,0,0,0,44,24a12.1858,12.1858,0,0,0-1.6792.1162A14.9915,14.9915,0,0,0,14.8623,26.001,8.01,8.01,0,0,0,7,34a7.91,7.91,0,0,0,.0537.916A9.0644,9.0644,0,0,0,2,43a8.8727,8.8727,0,0,0,1.2188,4.5078A.9991.9991,0,0,0,4.08,48H59.74a.9991.9991,0,0,0,.8194-.4268A7.942,7.942,0,0,0,62,43,8.0294,8.0294,0,0,0,55.9771,35.2549Z" fill="#656565"/>
        </g></svg>
        );
    case '03n':
        return (
            <svg 
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><title/><g id="Cloud"><path d="M55.9771,35.2549A12.015,12.015,0,0,0,44,24a12.1858,12.1858,0,0,0-1.6792.1162A14.9915,14.9915,0,0,0,14.8623,26.001,8.01,8.01,0,0,0,7,34a7.91,7.91,0,0,0,.0537.916A9.0644,9.0644,0,0,0,2,43a8.8727,8.8727,0,0,0,1.2188,4.5078A.9991.9991,0,0,0,4.08,48H59.74a.9991.9991,0,0,0,.8194-.4268A7.942,7.942,0,0,0,62,43,8.0294,8.0294,0,0,0,55.9771,35.2549Z" fill="#656565"/></g></svg>
        
        );
    case '04n':
        return (
            <svg 
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><title/><g id="Cloudy"><path d="M58.7051,20.438q.0145-.2022.0146-.4028a5.5933,5.5933,0,0,0-5.2456-5.5806A10.17,10.17,0,0,0,35.042,13.1875a8.0309,8.0309,0,0,0-.9019-.0527,8.1458,8.1458,0,0,0-6.312,2.9643,1,1,0,0,0,.8472,1.6328c.1055-.0078.2183-.0073.3247-.0068a13.0334,13.0334,0,0,1,11.8394,7.6431,1,1,0,0,0,1.1147.5659,10.0178,10.0178,0,0,1,9.626,3.271.9994.9994,0,0,0,.76.35h7.95a1,1,0,0,0,.8633-.4951A6.2019,6.2019,0,0,0,62,25.9351,6.2788,6.2788,0,0,0,58.7051,20.438Z" fill="#000"/><path d="M55.9771,34.98A12.006,12.006,0,0,0,44,23.7251a12.1858,12.1858,0,0,0-1.6792.1162A15.0383,15.0383,0,0,0,29,15.7251c-.1543,0-.3208.001-.4272.01a14.9263,14.9263,0,0,0-13.7115,9.9907A8.01,8.01,0,0,0,7,33.7251a7.91,7.91,0,0,0,.0537.916A9.0644,9.0644,0,0,0,2,42.7251a8.8729,8.8729,0,0,0,1.2188,4.5078.9991.9991,0,0,0,.8613.4922H15.36a1,1,0,0,0,.9878-.8442,7.7477,7.7477,0,0,1,15.3046,0,1,1,0,0,0,.9878.8442h27.1a.9991.9991,0,0,0,.8194-.4268A7.942,7.942,0,0,0,62,42.7251,8.03,8.03,0,0,0,55.9771,34.98Z" fill="#656565"/><path d="M33.7368,47.61a10.2752,10.2752,0,0,0-.1089-1.0406,9.7478,9.7478,0,0,0-19.2563.0025,10.3531,10.3531,0,0,0-.1084,1.0381A7.9712,7.9712,0,0,0,9,55.105a1,1,0,0,0,1,1H38a1,1,0,0,0,1-1A7.9712,7.9712,0,0,0,33.7368,47.61Z" fill="#000"/></g></svg>
        
        );
    case '09n':
            return (
                <svg 
                width= {width ? width : "100%"}
                height={height ? height : "100%"}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ><title/><g id="Cloudy"><path d="M58.7051,20.438q.0145-.2022.0146-.4028a5.5933,5.5933,0,0,0-5.2456-5.5806A10.17,10.17,0,0,0,35.042,13.1875a8.0309,8.0309,0,0,0-.9019-.0527,8.1458,8.1458,0,0,0-6.312,2.9643,1,1,0,0,0,.8472,1.6328c.1055-.0078.2183-.0073.3247-.0068a13.0334,13.0334,0,0,1,11.8394,7.6431,1,1,0,0,0,1.1147.5659,10.0178,10.0178,0,0,1,9.626,3.271.9994.9994,0,0,0,.76.35h7.95a1,1,0,0,0,.8633-.4951A6.2019,6.2019,0,0,0,62,25.9351,6.2788,6.2788,0,0,0,58.7051,20.438Z" fill="#000"/>
                <path d="M55.9771,35.2549A12.015,12.015,0,0,0,44,24a12.1858,12.1858,0,0,0-1.6792.1162A14.9915,14.9915,0,0,0,14.8623,26.001,8.01,8.01,0,0,0,7,34a7.91,7.91,0,0,0,.0537.916A9.0644,9.0644,0,0,0,2,43a8.8727,8.8727,0,0,0,1.2188,4.5078A.9991.9991,0,0,0,4.08,48H59.74a.9991.9991,0,0,0,.8194-.4268A7.942,7.942,0,0,0,62,43,8.0294,8.0294,0,0,0,55.9771,35.2549Z" fill="#656565"/>

                <path d="M10.958,52.1719c-.3228.3457-3.1548,3.4551-3.1548,5.9424a3.8862,3.8862,0,0,0,7.7724,0c0-2.4873-2.832-5.5967-3.1547-5.9424A1.03,1.03,0,0,0,10.958,52.1719Z" fill="#656565"/><path d="M29.2685,52.1719c-.3227.3457-3.1548,3.4551-3.1548,5.9424a3.8863,3.8863,0,0,0,7.7725,0c0-2.4873-2.832-5.5967-3.1548-5.9424A1.03,1.03,0,0,0,29.2685,52.1719Z" fill="#656565"/><path d="M49.0419,52.1719a1.03,1.03,0,0,0-1.4628,0c-.3228.3457-3.1548,3.4551-3.1548,5.9424a3.8862,3.8862,0,0,0,7.7724,0C52.1967,55.627,49.3647,52.5176,49.0419,52.1719Z" fill="#656565"/>
                
                </g></svg>
            
            );             
    case '10n':
        return (
            <svg 
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><title/><g data-name="Night Rainy" id="Night_Rainy"><path d="M61.4482,20.666a1.0034,1.0034,0,0,0-1.1616.1924A11.0932,11.0932,0,0,1,52.31,24.2,11.208,11.208,0,0,1,45.8554,3.8281a1,1,0,0,0-.416-1.8056A2.1852,2.1852,0,0,0,45.09,2,17.1089,17.1089,0,0,0,28,19.09c0,.4356.021.87.0527,1.294a1,1,0,0,0,.8555.916A12.01,12.01,0,0,1,38.17,28.2637a.9973.9973,0,0,0,1.1142.5644A9.2619,9.2619,0,0,1,49.7871,34.53a.9992.9992,0,0,0,.9326.64.9861.9861,0,0,0,.3476-.0625A17.0683,17.0683,0,0,0,61.9882,21.7119.9989.9989,0,0,0,61.4482,20.666Z" fill="#9883ba"/><path d="M52.3862,37.126a11.0281,11.0281,0,0,0-.7339-3.3164,11.28,11.28,0,0,0-12.0029-7.0733A13.99,13.99,0,0,0,29.1977,19.32,13.3055,13.3055,0,0,0,27.21,19.18a14.1137,14.1137,0,0,0-13.2168,9.3125A7.5243,7.5243,0,0,0,6.66,36.01a7.84,7.84,0,0,0,.0415.8154A8.504,8.504,0,0,0,2,44.39,8.2089,8.2089,0,0,0,3.1528,48.626,1,1,0,0,0,4.01,49.11H55.83a.999.999,0,0,0,.8213-.43A7.5045,7.5045,0,0,0,52.3862,37.126Z" fill="#656565"/><path d="M10.958,52.1719c-.3228.3457-3.1548,3.4551-3.1548,5.9424a3.8862,3.8862,0,0,0,7.7724,0c0-2.4873-2.832-5.5967-3.1547-5.9424A1.03,1.03,0,0,0,10.958,52.1719Z" fill="#656565"/><path d="M29.2685,52.1719c-.3227.3457-3.1548,3.4551-3.1548,5.9424a3.8863,3.8863,0,0,0,7.7725,0c0-2.4873-2.832-5.5967-3.1548-5.9424A1.03,1.03,0,0,0,29.2685,52.1719Z" fill="#656565"/><path d="M49.0419,52.1719a1.03,1.03,0,0,0-1.4628,0c-.3228.3457-3.1548,3.4551-3.1548,5.9424a3.8862,3.8862,0,0,0,7.7724,0C52.1967,55.627,49.3647,52.5176,49.0419,52.1719Z" fill="#656565"/></g></svg>
        );     
    case '11n':
        return (
            <svg 
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <title/><g id="Storm">
            <path d="M58.7051,20.438q.0145-.2022.0146-.4028a5.5933,5.5933,0,0,0-5.2456-5.5806A10.17,10.17,0,0,0,35.042,13.1875a8.0309,8.0309,0,0,0-.9019-.0527,8.1458,8.1458,0,0,0-6.312,2.9643,1,1,0,0,0,.8472,1.6328c.1055-.0078.2183-.0073.3247-.0068a13.0334,13.0334,0,0,1,11.8394,7.6431,1,1,0,0,0,1.1147.5659,10.0178,10.0178,0,0,1,9.626,3.271.9994.9994,0,0,0,.76.35h7.95a1,1,0,0,0,.8633-.4951A6.2019,6.2019,0,0,0,62,25.9351,6.2788,6.2788,0,0,0,58.7051,20.438Z" fill="#000"/>
            <path d="M55.9771,35.2549A12.015,12.015,0,0,0,44,24a12.1858,12.1858,0,0,0-1.6792.1162A14.9915,14.9915,0,0,0,14.8623,26.001,8.01,8.01,0,0,0,7,34a7.91,7.91,0,0,0,.0537.916A9.0644,9.0644,0,0,0,2,43a8.8727,8.8727,0,0,0,1.2188,4.5078A.9991.9991,0,0,0,4.08,48H59.74a.9991.9991,0,0,0,.8194-.4268A7.942,7.942,0,0,0,62,43,8.0294,8.0294,0,0,0,55.9771,35.2549Z" fill="#656565"/>
            <path d="M17,45H13.2808l.6894-2.7573A1,1,0,0,0,13,41H8a1,1,0,0,0-.9614.7251l-2,7A1,1,0,0,0,6,50H7.7192L6.03,56.7573a1,1,0,0,0,1.71.9156l10-11A1,1,0,0,0,17,45Z" fill="#ff9a76"/><path d="M38,45H34.2808l.6894-2.7573A1,1,0,0,0,34,41H29a1,1,0,0,0-.9614.7251l-2,7A1,1,0,0,0,27,50h1.7192L27.03,56.7573a1,1,0,0,0,1.71.9156l10-11A1,1,0,0,0,38,45Z" fill="#ff9a76"/><path d="M58.9146,45.5952A1,1,0,0,0,58,45H54.2808l.6894-2.7573A1,1,0,0,0,54,41H49a1,1,0,0,0-.9614.7251l-2,7A1,1,0,0,0,47,50h1.7192L47.03,56.7573a1,1,0,0,0,1.71.9156l10-11A1,1,0,0,0,58.9146,45.5952Z" fill="#ff9a76"/></g></svg>
        );
    case '13n':
        return (
            <svg 
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><title/><title/><g id="Snowy"><path d="M55.9771,24.2549A12.0165,12.0165,0,0,0,44,13a12.175,12.175,0,0,0-1.6792.1162,14.9911,14.9911,0,0,0-27.458,1.8848A8.0094,8.0094,0,0,0,7,23a7.9152,7.9152,0,0,0,.0537.916A9.0644,9.0644,0,0,0,2,32a8.8713,8.8713,0,0,0,1.2188,4.5078A1,1,0,0,0,4.08,37H59.74a.9991.9991,0,0,0,.8194-.4268A7.9408,7.9408,0,0,0,62,32,8.0286,8.0286,0,0,0,55.9771,24.2549Z" fill="#656565"/><circle cx="12" cy="44" r="4" fill="#9cd5f2"/><circle cx="20" cy="55" r="4" fill="#9cd5f2"/><circle cx="41" cy="55" r="4" fill="#9cd5f2"/><circle cx="52" cy="44" r="4" fill="#9cd5f2"/><circle cx="32" cy="44" r="4" fill="#9cd5f2"/></g></svg>
        );
    case '50n':
        return (
           <svg 
            width= {width ? width : "100%"}
            height={height ? height : "100%"}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M2.62,21.05c0-0.24,0.08-0.45,0.25-0.61c0.17-0.16,0.38-0.24,0.63-0.24h18.67c0.25,0,0.45,0.08,0.61,0.24
                c0.16,0.16,0.24,0.36,0.24,0.61c0,0.23-0.08,0.43-0.25,0.58c-0.17,0.16-0.37,0.23-0.6,0.23H3.5c-0.25,0-0.46-0.08-0.63-0.23
                C2.7,21.47,2.62,21.28,2.62,21.05z M5.24,17.91c0-0.24,0.09-0.44,0.26-0.6c0.15-0.15,0.35-0.23,0.59-0.23h18.67
                c0.23,0,0.42,0.08,0.58,0.24c0.16,0.16,0.23,0.35,0.23,0.59c0,0.24-0.08,0.44-0.23,0.6c-0.16,0.17-0.35,0.25-0.58,0.25H6.09
                c-0.24,0-0.44-0.08-0.6-0.25C5.32,18.34,5.24,18.14,5.24,17.91z M5.37,15.52c0,0.09,0.05,0.13,0.15,0.13h1.43
                c0.06,0,0.13-0.05,0.2-0.16c0.24-0.52,0.59-0.94,1.06-1.27c0.47-0.33,0.99-0.52,1.55-0.56l0.55-0.07c0.11,0,0.17-0.06,0.17-0.18
                l0.07-0.5c0.11-1.08,0.56-1.98,1.37-2.7c0.81-0.72,1.76-1.08,2.85-1.08c1.08,0,2.02,0.36,2.83,1.07c0.8,0.71,1.26,1.61,1.37,2.68
                l0.08,0.57c0,0.11,0.07,0.17,0.2,0.17h1.59c0.64,0,1.23,0.17,1.76,0.52s0.92,0.8,1.18,1.37c0.07,0.11,0.14,0.16,0.21,0.16h1.43
                c0.12,0,0.17-0.07,0.14-0.23c-0.29-1.02-0.88-1.86-1.74-2.51c-0.87-0.65-1.86-0.97-2.97-0.97h-0.32c-0.33-1.33-1.03-2.42-2.1-3.27
                s-2.28-1.27-3.65-1.27c-1.4,0-2.64,0.44-3.73,1.32s-1.78,2-2.09,3.36c-0.85,0.2-1.6,0.6-2.24,1.21c-0.64,0.61-1.09,1.33-1.34,2.18
                v-0.04C5.37,15.45,5.37,15.48,5.37,15.52z M6.98,24.11c0-0.24,0.09-0.43,0.26-0.59c0.15-0.15,0.35-0.23,0.6-0.23h18.68
                c0.24,0,0.44,0.08,0.6,0.23c0.17,0.16,0.25,0.35,0.25,0.58c0,0.24-0.08,0.44-0.25,0.61c-0.17,0.17-0.37,0.25-0.6,0.25H7.84
                c-0.23,0-0.43-0.09-0.6-0.26C7.07,24.55,6.98,24.34,6.98,24.11z " fill="#656565"/>
            </svg>
        );

    default:
        return  <svg 
        width= {width ? width : "100%"}
        height={height ? height : "100%"}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ></svg>;
  }
};