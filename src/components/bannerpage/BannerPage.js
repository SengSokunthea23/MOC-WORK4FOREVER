import React from "react";
function BannerPage() {
    return (
        <section className="text-center" style={{height:"240px"}}>
            <div className="row size-image">
                <img src="Beta-header.jpg"/>
                <div style={{position:"absolute",top:"130px", color:"white", textShadow:"1px 2px 3px black"}}>
                <h1>Welcome to Cambodia!!</h1>
                <h4>Explore new markets and find the best FTA for your business</h4>
                </div>
            </div>
        </section>
    )
}
export default BannerPage;