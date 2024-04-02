import "../../app/Contactenos/contact.css"
export default function Formulario({comment})
{
    return (
    <div className="Form">
        <form action="">
            <p className="text-red-950 text-lg text-start font-bold">{comment ? "Sección de comentarios" : "Formulario de ayuda"}</p>
            <p className="text-lg">Nombre y Apellidos</p>
            <input type="text" name="name" id="username" placeholder="Ejemplo: Tomás Rodríguez"/>
            <p className="text-lg">Correo electrónico</p>
            <input type="mail" name="email" id="usermail" placeholder="Ejemplo: tomas.rdgz@gmail.com"/>
            <p className="text-lg">Comentarios</p>
            <textarea name="comment" id="comment" placeholder="Escribe tu comentario sobre la noticia"/>
        </form>
        <div className="flex justify-end items-end buttonsRow">
            <button className="mr-1 bg-white text-red-950">Cancelar</button>
            <button className="bg-[#5a1024] text-white">Enviar</button>
        </div>
    </div>
    );

}

