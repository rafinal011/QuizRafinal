export default function HelloWorld(){
    const propsUserCard= {
        nama:"dwi",
        nim:"2355301046"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <greetingBinjai />
            <QuoteText />
            <UserCard
             nama="Deni Dwi Cahyono" 
             nim="2355301046"
             tanggal={new Date().toLocaleDateString()}
           /> 
            <UserCard {...propsUserCard}/>

            <img className="logo" src="public/IMG/jamur.jpg" alt="logo"/>
        
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam dari binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}