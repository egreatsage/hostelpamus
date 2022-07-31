import { db } from "./firebase-config";
import { collection,getDocs,getDoc,addDoc,updateDoc,doc,deleteDoc } from "firebase/firestore";


const BookingCollectionRef = collection(db,'Booking');
const RoominfoCollectionRef = collection(db,'Roominfo');
class BookingDetails {
    addDetails = (newdetails) => {
        return addDoc(BookingCollectionRef, newdetails);
    };
    addRoominfo = (newRoominfo) => {
        return addDoc(RoominfoCollectionRef, newRoominfo);
    };

    updateDetails = (id, updatedDetails) =>{
        const DetailsDoc = doc(db, 'Booking', id);
        return updatedDetails(DetailsDoc,updateDoc);
    };
    deleteDetails = (id) =>{
        const DetailsDoc = doc(db, 'Booking', id);
        return deleteDoc(DetailsDoc);
    };
    deleteRoominfo = (id) =>{
            const RoominfoDoc = doc(db, 'Roominfo', id);
            return deleteDoc(RoominfoDoc);
    };

    getAllDetails = () =>{
        return getDocs(BookingCollectionRef);
    }
    getAllRoominfo = () =>{
        return getDocs(RoominfoCollectionRef);
    }


    
    getDetail = (id) =>{
        const BookingDoc = doc(db, 'Booking', id);
        return getDoc(BookingDoc);
    }



}
export default new BookingDetails();