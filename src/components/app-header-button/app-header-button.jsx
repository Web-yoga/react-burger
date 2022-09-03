
function AppHeaderButton({ title, children }) {
	return (
		<div className="p-5 ml-2">
			{children} 
			<span>{title}</span>
		</div>
	);
  }
  
  export default AppHeaderButton;