import React from 'react'
import './Slider.css'


function Slider() 
{
    function Next()
    {
        let items = document.querySelectorAll('.item')
        document.querySelector('.slider').appendChild(items[0])
    }
    function Prev()
    {
        let items = document.querySelectorAll('.item')
        document.querySelector('.slider').prepend(items[items.length - 1])
    }
    return(
        <>
            <div className="container">
                <div className="slider">
                    <div className="item" style={{backgroundImage:'url(./src/assets/1.jpg)'}}>
                        <div className="content">
                            <div className="name">Demon Slayer</div>
                            <div className="desc">A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.</div>
                            <button>Watch Now</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage:'url(./src/assets/2.jpg)'}}>
                        <div className="content">
                            <div className="name">Naruto : Shippudent</div>
                            <div className="desc">ts main character, Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.</div>
                            <button>Watch Now</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage:'url(./src/assets/3.jpg)'}}>
                        <div className="content">
                            <div className="name">Attack On Tiatn</div>
                            <div className="desc">Set in a post-apocalyptic world where the remains of humanity live behind walls protecting them from giant humanoid Titans, Attack on Titan follows protagonist Eren Yeager, along with friends Mikasa Ackerman and Armin Arlert.</div>
                            <button>Watch Now</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage:'url(./src/assets/4.jpg)'}}>
                        <div className="content">
                            <div className="name">Bleach</div>
                            <div className="desc">The series aired on TV Tokyo from October 2004 to March 2012, spanning 366 episodes. The story follows the adventures of Ichigo Kurosaki after he obtains the powers of a Soul Reaper—a death personification similar to the Grim Reaper—from another Soul Reaper, Rukia Kuchiki.</div>
                            <button>Watch Now</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage:'url(./src/assets/5.jpg)'}}>
                        <div className="content">
                            <div className="name">DBZ</div>
                            <div className="desc">With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies. With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies.</div>
                            <button>Watch Now</button>
                        </div>
                    </div>
                </div>

                <div class="button">
                    <button className="prev" onClick={Prev}> &lt; </button>
                    <button className="next" onClick={Next}> &gt; </button>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
}

export default Slider

