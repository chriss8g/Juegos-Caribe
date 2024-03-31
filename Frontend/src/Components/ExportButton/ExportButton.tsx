import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ExportToPDFButton({input})
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
        <button onClick={exportToPDF} className='bg-[#5a1024] flex justify-center w-50 mt-5 mx-auto mb-10 text-white px-5 py-2 rounded-lg'>
            Exportar tabla a PDF
        </button>
    )
}