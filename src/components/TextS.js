 
export function TextIn( {content}){
    return <p>{content}</p>
}
  
export default function Text( {content ,strong}){
    if (strong) {
        return <strong>{content}</strong>
    } else {
        return <p>{content}</p>
    }
}