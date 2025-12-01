function BannerBgCurve({ design = 1, color = "#ffffff", height = "h-24" }) {
// Definimos diferentes caminos SVG según el diseño
const paths = {
1: "M0,180L75,196C190,210,200,300,100,200.3C640,331,800,117,960,60.8C1100,0,1200,0,1320,80L1440,165V320H0Z",
2: "M0,140L80,100C100,0,1600,250,480,200C740,100,700,120,900,180C1120,240,1280,300,1440,120V320H0Z",
3: "M0,200L100,220C200,240,400,260,600,220C800,180,1000,120,1200,160C1400,200,1440,180,1440,180V320H0Z",
};

return ( <div className="absolute bottom-0 left-0 w-full leading-none overflow-hidden">
<svg
className={`relative block w-full ${height} sm:h-28 md:h-32 lg:h-40 xl:h-48`}
xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
viewBox="0 0 1440 320"
preserveAspectRatio="none"
fill={color}
>
<path d={paths[design] || paths[1]} /> </svg> </div>
);
}

export { BannerBgCurve };
