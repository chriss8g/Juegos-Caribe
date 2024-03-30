import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ExportToPDFButton(input)
{
    const exportToPDF = () => {
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          
          pdf.addImage(imgData, 'PNG', 10, 10, 180, 0);
          pdf.save('table.pdf');
        });
    };
    
    return(
        <button onClick={exportToPDF} className='bg-[#5a1024] flex justify-center w-50 mx-auto text-white p-5 rounded-sm'>
            Exportar a pdf
        </button>
    )
}