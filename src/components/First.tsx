import Header from "@/components/Header";

function First() {
  return (
    <div className="min-h-screen bg">
      <div className="blackish min-h-screen p-10 md:p-16">
        <Header nav="Home"/> 
        <div className="mt-40 mb-4">
          <h1 className="text-white text-[30px] leading-[28px] lg:text-[90px] font-black lg:leading-[80px]" >
            <span  className="text-[#ffb100]">#Deconstructing</span> <br />
            #Disinformation
          </h1>
          <p className="text-white text-md lg:text-2xl w-[90%] mt-3 leading-5" >
            &quot;REALIA&apos;23&quot; is the name of this year&apos;s Rabee&apos; festival, organized by
            the Al Huda Students&apos; Association (ASAs), the U.G. Students&apos; Union
            of Darul Huda Islamic University. In a rapidly evolving contemporary
            context rife with falsehoods and fake news, REALIA&apos;23 aims to
            uncover and present the truth and facts. The Darul Huda U.G. Arts
            Fest will play a pivotal role in enhancing the academic progress of
            students across various fields of study and academic activities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default First;