
export const asyncpromises = () => {

    function simulateNetworkRequest(shouldSuccess: boolean): Promise<string> {

        console.log('เริ่มต้นการทำงาน promise - สถานะ Pending')

        return new Promise<string>((resolve, reject) => {
            
            setTimeout(() => {
                if (shouldSuccess) {

                    console.log('เสร็จสิ้นการทำงาน promise - สถานะ Fulfilled')
                    resolve('สำเร็จได้ข้อมูลกลับมาแล้ว')
                } else {
                    console.log('เสร็จสิ้นการทำงาน promise - สถานะ Rejected')
                    reject(new Error('ไม่สามารถเชื่อมต่อเครือข่ายได้'))
                }
            }, 2000)
        })
    }

    // simulateNetworkRequest(true)

    // simulateNetworkRequest(false)

    function promiseChainExample(): void {
        simulateNetworkRequest(true)
            .then((result) => {
                console.log('ข้อมูลที่ได้รับ:', result)
            })
            .then(() => {
                console.log('ทำงานต่อไปจากการทำงานแรกห')
            })
            .catch((error) => {
                console.error('เกิดข้อผิดพลาด:', error)
            })
            .finally(() => {
                console.log('จบการทำงาน')
            })
    }

    promiseChainExample()

}