import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getAllHotels, listAllRooms } from "@/controllers";

const hotelsRouter = Router()

hotelsRouter
    .all("/*", authenticateToken)
    .get("/", getAllHotels)
    .get("/:hotelId", listAllRooms)




export { hotelsRouter }