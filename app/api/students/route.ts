import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let students = [
  { id: 'student1', understand: true },
  { id: 'student2', understand: false },
  { id: 'student3', understand: true },
  { id: 'student4', understand: false },
];

export async function POST(request: NextRequest) : Promise<any> {
  try {
    const newStudentId = `student${students.length + 1}`;
    students.push({ id: newStudentId, understand: false });
    return NextResponse.json({
      id: newStudentId
    }, {
      status: 201,
    })
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: 'Internal Server Error' 
    }, {
      status: 500,
    })
  }
}

export async function GET(request: NextRequest) : Promise<any> {
  try {
    return NextResponse.json({
      students
    }, {
      status: 200,
    })
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: 'Internal Server Error' 
    }, {
      status: 500,
    })
  }
}

export async function PUT(request: NextRequest) : Promise<any> {
  try {
    const { studentId, understand } = await request.json();
    if(studentId == 'all'){
      students.forEach(student => {
        student.understand = false;
      });
      return NextResponse.json({
        message: 'All students\' understanding status reset successfully'
      }, {
        status: 200,
      });
    }
    else{
      const studentIndex = students.findIndex(student => student.id === studentId);
      if (studentIndex === -1) {
        return NextResponse.json({
          error: 'Student not found' 
        }, {
          status: 404,
        });
      }
      students[studentIndex].understand = understand;
      return NextResponse.json({
        studentId,
        understand
      }, {
        status: 200,
      });
    }

  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: 'Internal Server Error' 
    }, {
      status: 500,
    })
  }
}

export async function DELETE() : Promise<any> {

  try {
    students = [];
    return NextResponse.json({
      message: 'success'
    }, {
      status: 200,
    })
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: 'Internal Server Error' 
    }, {
      status: 500,
    })
  }
}

export const dynamic = "force-static";

// import { NextApiRequest, NextApiResponse } from 'next';

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'DELETE') {
//     // Handle the DELETE request here
//     res.status(200).json({ message: 'DELETE request handled successfully' });
//   } else {
//     res.status(405).json({ message: 'Only DELETE requests are allowed' });
//   }
// }