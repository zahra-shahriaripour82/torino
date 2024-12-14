import styles from "./ModalContainer.module.css"

function ModalContainer({children,isOpen,setIsOpen}) {
    if(!isOpen) return 
  return (
    <div className={styles.container}>
        <div className={styles.modal}>
            <div>{children}</div>
        </div>
    </div>
  )
}

export default ModalContainer